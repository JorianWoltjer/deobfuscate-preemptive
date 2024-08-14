let sOwg = 42;
const UPzg = "Hello, World!";
const oLqg = [1, 2, 3, 4, 5];
const QMtg = `The value is ${sOwg} and the constant is ${UPzg}`;
const kIkg = {name: "Alice", age: 30, address: {city: "Wonderland", postalCode: "12345"}, hobbies: ["reading", "chess"]};
const {name: MJng, age: gFeg, address: {city: IGhg}} = kIkg;
const [IaVg, ...kcYg] = kIkg.hobbies;
const EXOg = (gZRg, AUIg) => gZRg + AUIg;
const cWLg = (wRCg, YSFg, Ymth) => Ymth(wRCg, YSFg);
const Aowh = cWLg(10, 5, EXOg);
const Ujnh = [...oLqg, 6, 7, 8];
function wlqh(...Qghh) {
  console.log(Qghh);
}
function sikh() {
  let Mdbh = 0;
  return function () {
    Mdbh += 1;
    return Mdbh;
  };
}
const ofeh = sikh();
async function QEfe(sGie) {
  try {
    const MBZd = await fetch(sGie);
    if (!MBZd.ok) throw new Error("Network response was not ok");
    const IyTd = await MBZd.json();
    return IyTd;
  } catch (kAWd) {
    console.error("Fetch error:", kAWd);
  }
}
class Animal {
  constructor(gRDe) {
    this.name = gRDe;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  static species() {
    return "Animal";
  }
}
class Dog extends Animal {
  constructor(EPAe, YKre) {
    super(EPAe);
    this.breed = YKre;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
  static species() {
    return "Dog";
  }
}
const AMue = new Dog("Rex", "Labrador");
AMue.speak();
console.log(Dog.species());
(function () {
  console.log("IIFE running!");
}());
console.log(1337);
const UHle = sOwg > 40 ? "Greater than 40" : "Less than or equal to 40";
const wJoe = 5 & 3;
const wdcf = /hello/i;
const Yeff = wdcf.test("Hello world");
function saWe(UbZe) {
  if (UbZe > 0) {
    console.log(`${UbZe} is positive`);
  } else if (UbZe < 0) {
    console.log(`${UbZe} is negative`);
  } else {
    console.log(`${UbZe} is zero`);
  }
}
function kUJe(MVMe) {
  switch (MVMe) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
function MpAf(orDf) {
  for (let koxf = 0; koxf <= orDf; koxf++) {
    console.log(koxf);
  }
}
function Ejof(glrf) {
  while (glrf > 0) {
    console.log(glrf);
    glrf--;
  }
  console.log("Blast off!");
}
function Agif(cilf) {
  do {
    console.log(cilf);
    cilf--;
  } while (cilf > 0);
}
const gJpc = {firstName: "John", lastName: "Doe", age: 25};
function AEgc(cGjc) {
  for (const wBac in cGjc) {
    if (cGjc.hasOwnProperty(wBac)) {
      console.log(`${wBac}: ${cGjc[wBac]}`);
    }
  }
}
const syUb = ["apple", "banana", "cherry"];
function UzXb(UTKc) {
  for (const wVNc of UTKc) {
    console.log(wVNc);
  }
}
saWe(10);
saWe(-5);
saWe(0);
console.log(kUJe(3));
console.log(kUJe(7));
MpAf(5);
Ejof(5);
Agif(3);
AEgc(gJpc);
UzXb(syUb);
function QQEc(sSHc) {
  for (let oPBc = 0; oPBc < sSHc.length; oPBc++) {
    const IKsc = sSHc[oPBc];
    for (let kgjd = 0; kgjd < IKsc.length; kgjd++) {
      const Mhmd = IKsc[kgjd];
      if (Mhmd > 0) {
        if (Mhmd % 2 === 0) {
          console.log(`Even positive number found: ${Mhmd}`);
        } else {
          console.log(`Odd positive number found: ${Mhmd}`);
        }
      } else if (Mhmd < 0) {
        console.log(`Negative number found: ${Mhmd}`);
      } else {
        console.log(`Zero found at position [${oPBc}, ${kgjd}]`);
      }
      switch (Mhmd) {
        case 1:
          console.log(`Value is exactly one.`);
          break;
        case -1:
          console.log(`Value is exactly negative one.`);
          break;
        case 0:
          console.log(`Encountered a zero.`);
          break;
        default:
          console.log(`Value is neither 1, -1, nor 0.`);
      }
      let Ebad = Mhmd;
      while (Ebad > 0) {
        console.log(`Countdown from ${Ebad}`);
        Ebad--;
        let YWQc = Ebad;
        do {
          console.log(`  Double countdown: ${YWQc}`);
          YWQc--;
        } while (YWQc > 0);
      }
    }
  }
}
const AsHd = [[1, -2, 3], [0, 4, -5], [-1, 0, 6]];
QQEc(AsHd);
