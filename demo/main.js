/*
OOP: Object oriented Programming

- Astrazione
- Incapsulamento

- Ereditarietà
- Polimorfismo


*/

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function checkIsUnderAge(age) {
  return age < 18;
}

const fullName = getFullName('Gaetano', 'Frascolla');
const isUnderAge = checkIsUnderAge(40);

// console.log(fullName, isUnderAge);

const gaetano1 = {
  //caratteristiche
  //azioni
  firstName: 'Gaetano',
  lastName: 'Frascolla',
  age: 40,
  getFullName: function () {
    //return this; //window
    console.log(`${this.firstName} ${this.lastName}`);
  },
  isUnderAge: function () {
    return this.age < 18;
  },
};

const matteo1 = {
  firstName: 'Matteo',
  lastName: 'Sanson',
  age: 30,
  getFullName: function () {
    //return this; //window
    console.log(`${this.firstName} ${this.lastName}`);
  },
  isUnderAge: function () {
    return this.age < 18;
  },
};
// console.log(gaetano1);
// console.log(matteo1);

class Person {
  firstName;
  lastName;
  age;

  constructor(_firstName, _lastName, _age) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  isUnderAge() {
    return this.age < 18;
  }
}

// Person.getFullName();

const gaetano = new Person('Gaetano', 'Frascolla', 40);
const diego = new Person('Diego', 'Romeo', 24);

const people = [gaetano, diego, new Person('Giacomo', 'Rebussi', 25)];
console.log(people);

const numbers2 = new Array(5);

// console.log(numbers2);

class MyArray {
  length;
  data;
  constructor() {
    this.data = {};
    this.length = 0;
  }

  forEach() {}
  map() {}
  filter() {}
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
}

const numbers = new MyArray();

console.log(numbers);

numbers.push(5);
numbers.push('ciao');
console.log(numbers);
