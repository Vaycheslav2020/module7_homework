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

class deviceClass {
  constructor(name, power) {
    (this.name = name),
      (this.powerConsumption = power + " watt"),
      (this.isPlugged = false);
  }
  on() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  off() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}

// лампа
class lamp extends deviceClass {
  constructor(name, brand, type, power) {
    super(name, power),
    this.brand = brand,
    this.type = type,
    this.isPlugged = true
  }
}

// компьютер

class pc extends deviceClass {
  constructor(name, power, type, brand) {
    super(name, power),
    this.type = type,
    this.brand = brand
  }
}

// экземпляры
const TABLE_LAMP = new lamp("table lamp", "OKIRO LED 234 NEW", "table lamp", 24);
const LAPTOP = new pc("computer", 100, "laptop", "ASUS PN41-BP040MV");


TABLE_LAMP.on();
LAPTOP.off();

console.log(TABLE_LAMP);
console.log(LAPTOP);
