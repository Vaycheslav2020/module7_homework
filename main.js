// Задание 1.
console.log("// Задание 1");

const LOCAL = { city: "Moscow" };
const PERSON = Object.create(LOCAL);
PERSON.name = "Vlad";
PERSON.age = 25;
PERSON.status = "Old";
console.log(PERSON, "person");

(function checkingObjectValues(Obj) {
  for (const key in Obj) {
    if (Object.hasOwnProperty.call(Obj, key)) {
      const element = Obj[key];
      console.log(element);
    }
  }
})(PERSON);

// Задание 2.
console.log("// Задание 2");

const NAME_1 = "Alexey";
const NAME_2 = "Ignat";

const Obj_1 = {
  name: "Alexey",
};
const Obj_2 = {
  name: "Vlad",
};

function checkObjName(name, obj) {
  if (typeof name === "string") {
    return name === obj.name;
  }
}
console.log(checkObjName(NAME_1, Obj_1));
console.log(checkObjName(NAME_2, Obj_2));

// Задание 3.
console.log("// Задание 3");

function createObject() {
  return Object.create(null);
}
console.log(createObject());
console.log(typeof createObject());

// Задание 4.
console.log("// Задание 4");

function Device(name, brand, power) {
  (this.name = name),
    (this.brand = brand),
    (this.powerConsumption = power + " watt"),
    (this.isPlugged = false);
}
Device.prototype.plugIn = function () {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
};
Device.prototype.unPlug = function () {
  console.log(this.name + " is unplugged!");
  this.isPlugged = false;
};
const tableLamp = new Device("table lamp", "OKIRO LED 234 NEW", 24);
const computer = new Device("computer", "ASUS PN41-BP040MV", 100);
tableLamp.plugIn();
computer.unPlug();

console.log(tableLamp);
console.log(computer);

// Задание 5.
console.log("// Задание 5");

class DeviceClass {
  constructor(name, brand, power) {
    (this.name = name),
      (this.brand = brand),
      (this.powerConsumption = power + " watt"),
      (this.isPlugged = false);
  }
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  unPlug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}

const tableLamp1 = new DeviceClass("table lamp", "OKIRO LED 234 NEW", 24);
const computer2 = new DeviceClass("computer", "ASUS PN41-BP040MV", 100);
tableLamp.plugIn();
computer.unPlug();

console.log(tableLamp1);
console.log(computer2);
