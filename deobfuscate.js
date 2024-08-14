#!/usr/bin/env node
const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser({
    description: "Deobfuscate PreEmptive's JSDefender Demo",
    epilog: "WARNING: Only deobfuscate scripts you trust, as eval() is used in many places!"
});
parser.add_argument('file', { help: 'Obfuscated JavaScript file to deobfuscate' });
const args = parser.parse_args();

const fs = require('fs');
const { refactor } = require('shift-refactor');
const { commonMethods } = require('refactor-plugin-common');
const Shift = require('shift-ast');

// Read file from stdin if `-` is passed
if (args.file === '-') args.file = 0;
const src = fs.readFileSync(args.file, 'utf-8');
const $script = refactor(src, commonMethods);

// Find decoders and setup arguments
const decoders_name = $script(`VariableDeclarator[init=null]`).nodes[0].binding.name;
console.error("Decoders name:", decoders_name);
const setup_args_name = $script(`VariableDeclarator[init.callee.property="call"]`).nodes[0].binding.name;
console.error("Setup args name:", setup_args_name);

// Eval to get decoder functions
const setup_src = $script(`CallExpression[callee.name="eval"] > LiteralStringExpression`).nodes[0].value;
eval(`const ${setup_args_name} = [];\n` + setup_src);

const decoders = eval(decoders_name);
console.error(`Found ${Object.keys(decoders).length} decoders`);

// Eval expressions like `decoders.decode1(0)`
$script(`CallExpression`).replace(node => {
    const callee = node.callee;

    if (callee.type === "StaticMemberExpression" && callee.object?.name === decoders_name) {
        return new Shift.LiteralStringExpression({
            value: decoders[callee.property](node.arguments[0].value)
        });
    }

    return node;
});
// Eval expressions like `decoders["ABCD"]()`
$script(`CallExpression`).replace(node => {
    const callee = node.callee;

    if (callee.type === "ComputedMemberExpression" && callee.object?.name === decoders_name) {
        return new Shift.LiteralNumericExpression({
            value: decoders[callee.expression.value]()
        });
    }

    return node;
});
// Simplify literal numeric expressions like `12345678 - 12345677`
$script(`BinaryExpression[left.type=LiteralNumericExpression][right.type=LiteralNumericExpression]`).replace(node => {
    return new Shift.LiteralNumericExpression({
        value: eval(node.left.value + node.operator + node.right.value)
    });
});

// Extract if() statements from `while` and `switch` statements
$script(`WhileStatement`).replace(node => {
    if (node?.type !== "WhileStatement" || node.body.type !== "SwitchStatement" ||
        node.body.cases[1].consequent[0].expression.expression.value !== 65535
    ) {
        return node;
    }

    const switch_ = node.body;
    const step_name = switch_.discriminant.name;
    console.error("Generating if() statement:", step_name);

    // Delete step declaration
    $script(`VariableDeclarationStatement[declaration.declarators.0.binding.name="${step_name}"]`).first().delete();

    return new Shift.IfStatement({
        test: switch_.cases[0].consequent[0].expression.expression.test,
        consequent: switch_.cases[1].consequent[1],
        alternate: switch_.cases[2]?.consequent.at(-2)
    });
});
// Extract for() loops from `while` and `switch` statements
$script(`WhileStatement`).replace(node => {
    if (node?.type !== "WhileStatement" || node?.body.type !== "BlockStatement" || node?.body.block.statements[0].type !== "SwitchStatement") {
        return node;
    }

    const switch_ = node.body.block.statements[0];
    const step_name = switch_.discriminant.name;
    const iterator_name = switch_.cases[0].consequent[1].expression.binding.name;
    console.error("Generating for() loop:", step_name, iterator_name);

    // Delete step/iterator declaration
    $script(`VariableDeclarationStatement[declaration.declarators.0.binding.name="${step_name}"]`).first().delete();
    $script(`VariableDeclarationStatement[declaration.declarators.0.binding.name="${iterator_name}"]`).first().delete();

    return new Shift.ForStatement({
        init: new Shift.VariableDeclaration({
            kind: "let",
            declarators: [new Shift.VariableDeclarator({
                binding: new Shift.BindingIdentifier({
                    name: iterator_name
                }),
                init: switch_.cases[0].consequent[1].expression.expression
            })]
        }),
        test: switch_.cases[1].consequent[0].expression.expression.test,
        update: switch_.cases[3].consequent[1].expression,
        body: switch_.cases[2].consequent[1]
    });
});
// Extract do while() statements from `while` and `switch` statements
$script(`WhileStatement`).replace(node => {
    if (node?.type !== "WhileStatement" || node.body.type !== "SwitchStatement" ||
        node.body.cases[1].consequent[0].expression.expression.value !== 1
    ) {
        return node;
    }

    const switch_ = node.body;
    const step_name = switch_.discriminant.name;
    console.error("Generating do while() loop:", step_name);

    // Delete step declaration
    $script(`VariableDeclarationStatement[declaration.declarators.0.binding.name="${step_name}"]`).first().delete();

    return new Shift.DoWhileStatement({
        test: switch_.cases[0].consequent[0].expression.expression.test,
        body: switch_.cases[1].consequent[1],
    });
});

// Remove unnecessary block statements
$script(`BlockStatement[block.statements.length=1][block.statements.0.type=ForStatement]`).replace(node => {
    return node.block.statements[0];
});

// `${"string"} -> "string"`
$script(`TemplateExpression`).replace(node => {
    for (let i = 0; i < node.elements.length; i++) {
        const element = node.elements[i];

        if (element.type === "LiteralStringExpression") {
            // Squish `TemplateElement+LiteralStringExpression+TemplateElement` into single `TemplateElement`
            node.elements.splice(i - 1, 3, new Shift.TemplateElement({
                rawValue: node.elements[i - 1].rawValue + element.value + node.elements[i + 1].rawValue,
            }));
        }
    }
    return node;
})

// `!![] -> true` and `NaN === NaN -> false`
$script(`UnaryExpression[operator="!"][operand.operator="!"][operand.operand.type=ArrayExpression]`).replace(node => {
    return new Shift.LiteralBooleanExpression({
        value: true
    });
});
$script(`BinaryExpression[operator="==="][left.name=NaN][right.name=NaN]`).replace(node => {
    return new Shift.LiteralBooleanExpression({
        value: false
    });
});

// Delete setup part
$script(`VariableDeclarator[init=null]`).first().delete();
$script(`ExpressionStatement`).first().delete();

// Output
$script.convertComputedToStatic();
console.error("=== Done deobfuscating, writing result! ===\n");
process.stdout.write($script.print());
