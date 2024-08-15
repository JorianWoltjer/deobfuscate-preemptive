# Deobfuscate PreEmptive's JSDefender Demo

This tool automatically deobfuscates JavaScript code 'Protected' with [PreEmptive's JSDefender Demo](https://www.preemptive.com/online-javascript-obfuscator/). Besides variable names and comments which are not recoverable, the resulting code should be a perfect replica of the original code. This makes it easy to analyze the code futher.

> [!WARNING]  
> Only deobfuscate scripts that you trust, as `eval()` is used in many places! Consider using a docker container to sandbox it.

This script heavily uses [`shift-refactor`](https://github.com/jsoverson/shift-refactor) to parse and rewrite the JavaScript code into something more readable. Some operations that are performed:

* Evaluate decoder functions (eg. `MrWM.E9DK(0) -> "log"`)
* Simplify literal numeric expressions (eg. `15658734^0O73567354 -> 2`)
* Extract `if()`, `for()` and `do while()` statements from obfuscated control flow
* Simplify template strings (eg. `` `${"a"}${"b"}` -> "ab" ``)
* Simplify booleans (eg. `!![] -> true`)

## Installation

```sh
git clone https://github.com/JorianWoltjer/deobfuscate-preemptive.git && cd deobfuscate-preemptive
npm i
./deobfuscate.js --help
```

## Usage

```sh
usage: deobfuscate.js [-h] file

Deobfuscate PreEmptive's JSDefender Demo

positional arguments:
  file        Obfuscated JavaScript file to deobfuscate

optional arguments:
  -h, --help  show this help message and exit
```

##### Example

Take the following source code as an example:

```js
console.log('Hello, world!');
```

Putting it through [the obfuscator](https://www.preemptive.com/online-javascript-obfuscator/) as a developer would, the result is something like this:

```js
let MrWM;!function(){const QaXH=Array.prototype.slice.
call(arguments);return eval("(function QWHn(zcPf){const bKRf=jWyg(zcPf,
zemg(QWHn.toString()));try{let v7Jf=eval(bKRf);
...
X%07%1D%1D%13%1F%1C%08%0BIA%08%02%0E%01%12%17%0FHA@%16N*%176%25%5D=3?
!X%07%1D%1D%13%1F%1C%08%0BIA%08%02%0E%01%12%17%0FHAA%16%08N\")")}();
console[MrWM.E9DK(0)](MrWM.AWqI(1));
```

Save the above file to `obfuscated.js`, then use the following command to deobfuscate it:

```shell
$ ./deobfuscate.js obfuscated.js > deobfuscated.js

Decoders name: LQlS
Setup args name: QaXH
Found 43 decoders
=== Done deobfuscating, writing result! ===
```

Now, see `deobfuscated.js` for what should be a close replica of the original source code:

```js
console.log("Hello, world!");
```
