// ***********  Exercises Level 1

//1- Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  animalsInfo() {
    return `${this.name} is ${this.age} year(s) old ${this.color} in color. it has ${this.legs} legs`;
  }

  set removeLegs(leg) {
    this.legs -= leg;
  }

  get animalName() {
    return this.name;
  }
}

//2- Create a Dog and Cat child class from the Animal Class.

let dog = new Animal(`jack`, 5, `black`, 4);
let cat = new Animal(`miyav`, 3, `brown`, 4);

console.log(dog); // Animal {name: 'jack', age: 5, color: 'black', legs: 4}
console.log(cat); // Animal {name: 'miyav', age: 3, color: 'brown', legs: 4}

//************ Exercises Level 2

// 1- Override the method you create in Animal class

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  animalsInfo() {
    return `${this.name} is ${this.age} year(s) old ${this.color} in color. it has ${this.legs} legs`;
  }

  set removeLegs(leg) {
    this.legs -= leg;
  }

  get animalName() {
    return this.name;
  }
}

class Pet extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }

  get getGender() {
    return this.gender;
  }

  animalsInfo() {
    return `${this.name} is ${this.age} year(s) old ${this.color} in color. it has ${this.legs} legs ${this.gender}`;
  }
}

let rabbit = new Pet("ross", 3, "snow-white", 4, `male`);

console.log(rabbit.animalsInfo()); // ross is 3 year(s) old snow-white in color. it has 4 legs male

// ***********  Exercises Level 3

// 2- Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  get totalIncome() {
    let sumIncom = 0;
    this.incomes.forEach((income) => (sumIncom += income));
    return sumIncom;
  }

  get totalExpense() {
    let sumexpens = 0;
    this.expenses.forEach((expens) => (sumexpens += expens));
    return sumexpens;
  }

  accountInfo() {
    let totalMoney = this.totalIncome - this.totalExpense;
    return `
full-name: ${this.firstname} ${this.lastname}
total-Income: ${this.totalIncome}
total-Expenses: ${this.totalExpense}
total-money: ${totalMoney}
`;
  }

  set addIncome(incomes) {
    this.incomes.push(incomes);
  }

  set addExpenses(expenses) {
    this.expenses.push(expenses);
  }
}

let bankAccount = new PersonAccount(`arjin`, `albay`);

bankAccount.addIncome = Math.floor(Math.random() * 2500);
bankAccount.addExpenses = Math.floor(Math.random() * 2500);

console.log(bankAccount.accountInfo());
