// ************** Exercises: Level 1

// Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem(`firstName`, `arjin`);
localStorage.setItem(`lastName`, `Albay`);
localStorage.setItem(`age`, 250);
localStorage.setItem(`country`, `Turkey`);
localStorage.setItem(`city`, `Diyarbakir`);

console.log(localStorage);

// ************** Exercises: Level 2

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

let student = {
  firstName: `arjin`,
  lastName: `Albay`,
  age: 250,
  country: `Turkey`,
  skills: ["HTML", "CSS", "JS", "React"],
};

let studentJson = JSON.stringify(student);

localStorage.setItem(`student`, studentJson);
console.log(localStorage);

// ************** Exercises: Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

let personAccount = {
  firstName: `arjin`,
  lastName: `Albay`,
  incomes: 5000,
  expenses: 600,
  totalIncome: totalIncome(),
  totalExpense: totalExpense(),
  accountInfo: accountInfo(),
  addIncome: addIncome(),
  addExpense: addExpense(),
  accountBalance: accountBalance(),
};

let personJson = JSON.stringify(personAccount);

localStorage.setItem(`person`, personJson);
