import {readFileSync} from "fs";
const {writeFileSync: Ymth} = require("fs");
let Aowh = 42;
const Ujnh = "Hello, World!";
const wlqh = [1, 2, 3, 4, 5];
const Qghh = `The value is ${Aowh} and the constant is ${Ujnh}`;
const sikh = {name: "Alice", age: 30, address: {city: "Wonderland", postalCode: "12345"}, hobbies: ["reading", "chess"]};
const {name: Mdbh, age: ofeh, address: {city: QEfe}} = sikh;
const [sGie, ...MBZd] = sikh.hobbies;
const oDce = (IyTd, kAWd) => IyTd + kAWd;
const EvNd = (gxQd, gRDe, ISGe) => ISGe(gxQd, gRDe);
const cOxe = EvNd(10, 5, oDce);
const EPAe = [...wlqh, 6, 7, 8];
function YKre(...AMue) {
  console.log(AMue);
}
function UHle() {
  let wJoe = 0;
  return function () {
    wJoe += 1;
    return wJoe;
  };
}
const wdcf = UHle();
async function Yeff(saWe) {
  try {
    const UbZe = await fetch(saWe);
    if (!UbZe.ok) throw new Error("Network response was not ok");
    const QYSe = await UbZe.json();
    return QYSe;
  } catch (kUJe) {
    console.error("Fetch error:", kUJe);
  }
}
class Animal {
  constructor(orDf) {
    this.name = orDf;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  static species() {
    return "Animal";
  }
}
class Dog extends Animal {
  constructor(Ejof, glrf) {
    super(Ejof);
    this.breed = glrf;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
  static species() {
    return "Dog";
  }
}
const Agif = new Dog("Rex", "Labrador");
Agif.speak();
console.log(Dog.species());
(function () {
  console.log("IIFE running!");
}());
console.log(1337);
const cilf = Aowh > 40 ? "Greater than 40" : "Less than or equal to 40";
const EHmc = 5 & 3;
const gJpc = /hello/i;
const AEgc = gJpc.test("Hello world");
function cGjc(wBac) {
  if (wBac > 0) {
    console.log(`${wBac} is positive`);
  } else if (wBac < 0) {
    console.log(`${wBac} is negative`);
  } else {
    console.log(`${wBac} is zero`);
  }
}
function UzXb(UTKc) {
  switch (UTKc) {
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
function wVNc(QQEc) {
  for (let MNyc = 0; MNyc <= QQEc; MNyc++) {
    console.log(MNyc);
  }
}
function oPBc(IKsc) {
  while (IKsc > 0) {
    console.log(IKsc);
    IKsc--;
  }
  console.log("Blast off!");
}
function kMvc(kgjd) {
  do {
    console.log(kgjd);
    kgjd--;
  } while (kgjd > 0);
}
const gddd = {firstName: "John", lastName: "Doe", age: 25};
function Iegd(caXc) {
  for (const Ebad in caXc) {
    if (caXc.hasOwnProperty(Ebad)) {
      console.log(`${Ebad}: ${caXc[Ebad]}`);
    }
  }
}
const AYTc = ["apple", "banana", "cherry"];
function AsHd(cuKd) {
  for (const wpBd of cuKd) {
    console.log(wpBd);
  }
}
cGjc(10);
cGjc(-5);
cGjc(0);
console.log(UzXb(3));
console.log(UzXb(7));
wVNc(5);
oPBc(5);
kMvc(3);
Iegd(gddd);
AsHd(AYTc);
function YqEd(smvd) {
  for (let ojpd = 0; ojpd < smvd.length; ojpd++) {
    const Qksd = smvd[ojpd];
    for (let ULw = 0; ULw < Qksd.length; ULw++) {
      const oHn = Qksd[ULw];
      if (oHn > 0) {
        if (oHn % 2 === 0) {
          console.log(`Even positive number found: ${oHn}`);
        } else {
          console.log(`Odd positive number found: ${oHn}`);
        }
      } else if (oHn < 0) {
        console.log(`Negative number found: ${oHn}`);
      } else {
        console.log(`Zero found at position [${ojpd}, ${ULw}]`);
      }
      switch (oHn) {
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
      let gBb = oHn;
      while (gBb > 0) {
        console.log(`Countdown from ${gBb}`);
        gBb--;
        let ICe = gBb;
        do {
          console.log(`  Double countdown: ${ICe}`);
          ICe--;
        } while (ICe > 0);
      }
    }
  }
}
const kYU = [[1, -2, 3], [0, 4, -5], [-1, 0, 6]];
YqEd(kYU);
