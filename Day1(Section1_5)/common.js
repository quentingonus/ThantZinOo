console.log("Introduction to the JavaScript let keyword");
let x = 10;

if (x == 10) {
  let x = 20;

  console.log(x);
}

console.log(x);

console.log("JavaScript let and global object");
console.log("JavaScript let and callback function in a for loop");

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

console.log("Redeclaration");
(function (k) {
  var counter = 0;
  var counter;
  console.log(`Redeclaration 1: ${counter}`);
})();

(function (l) {
  let counter = 0;
  console.log(`Redeclaration 2: ${counter}`);
})();

{
  let log = function () {
    console.log(`Log: ${message}`);
  };

  let message = "Hello";
  log();
}

let scores = [75, 80, 95];

for (let score of scores) {
  console.log(score);
}

scores = [75, 80, 95];
for (const score of scores) {
  console.log(score);
}

function createDiv(
  height = "100px",
  width = "100px",
  border = "solid 1px red"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}
createDiv();

const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};

let message = combine("JavaScript", "Rest", "Parameters");
console.log(message);

let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];
rivers.push(...moreRivers);
console.log(rivers);

let initialChars = ["A", "B"];
let chars = [...initialChars, "C", "D"];
console.log(chars);

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);

scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores);

chars = ["A", ..."BC", "D"];
console.log(chars);

let prefix = "machine";
let machine = {
  [prefix + " name"]: "server",
  [prefix + " hours"]: 10000,
};

console.log(machine["machine name"]);
console.log(machine["machine hours"]);

let server = {
  name: "Server",
  restart() {
    console.log("The " + this.name + " is restarting...");
  },
  "starting up"() {
    console.log("The " + this.name + " is starting up!");
  },
};

server["starting up"]();

scores = [10, 20, 30];
scores.message = "Hi";

console.log("for...in:");
for (let score in scores) {
  console.log(score);
}

console.log("for...of:");
for (let score of scores) {
  console.log(score);
}

let f = 0b111;
console.log(f);

function format(literals, ...substitutions) {
  let result = "";

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }
  result += literals[literals.length - 1];
  return result;
}

let quantity = 9,
  priceEach = 8.99,
  result = format`${quantity} items cost $${(
    quantity * priceEach
  ).toFixed(2)}.`;

console.log(result);

function stat(a, b) {
  return [a + b, (a + b) / 2, a - b];
}
let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference);

let display = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`);

let person = {
  firstName: "John",
  lastName: "Doe",
};

display(person);

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
  static createAnonymous(gender) {
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
  }
}
let john = new Person("John Doe");
let name = john.name;
console.log(name);

person = new Person("Jane Doe");
console.log(person);

person.name = "Jane Smith";
console.log(person.name);

let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("John").add("Jane").add("Peter");
console.log(`The latest attendee is ${meeting.latest}.`);

let anonymous = Person.createAnonymous("male");
console.log(anonymous);

class Item {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log(Item.getCount());

class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("flying");
  }
}

let bird = new Bird(2);

bird.walk();
bird.fly();

class Persons {
  constructor(name) {
    this.name = name;
    console.log(new.target.name);
  }
}

class Employee extends Persons {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

john = new Persons("John Doe");
lily = new Employee("Lily Bush", "Programmer");

numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers);

function show() {
  return (x) => x + arguments[0];
}

display = show(10, 20);
result = display(5);
console.log(result);