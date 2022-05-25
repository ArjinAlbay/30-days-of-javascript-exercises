// Exercises: Level 1

// 1- Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let constants = [2.72, 3.14, 9.81, 37, 100];

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp); // 2.72 3.14 9.81 37 100

// 2- Destructure and assign the elements of countries array to fin, est, sw, den, nor

let countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

let [fin, est, sw, den, nor] = countries;

console.log(fin, est, sw, den, nor); // "Finland" "Estonia" "Sweden" "Denmark" "Norway"

//3-  Destructure the rectangle object by its properties or keys.

let rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p); // 20 10 200 60

let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter); // 20 10 200 60

// Exercises: Level 2

// 1- Iterate through the users array and get all the keys of the object using destructuring

let users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

for (let { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
} // all list

for (let { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(name, scores, skills, age);
  }
} // "John" 85 ["HTML"] 25

// *************************Exercises: Level 3

//1- Destructure the countries object print name, capital, population and languages of all countries

let countries2 = [
  {
    country: `Turkey`,
    capital: `ankara`,
    language: `Turkish`,
    population: 84.34,
  },

  {
    country: `Spain`,
    capital: `Madrid `,
    language: `Spanish`,
    population: 47.35,
  },

  {
    country: `England`,
    capital: `London`,
    language: `English`,
    population: 55.98,
  },

  {
    country: `France`,
    capital: `Paris`,
    language: `French`,
    population: 67.39,
  },

  {
    country: `Germany`,
    capital: `Berlin`,
    language: `German `,
    population: 83.24,
  },
];

for (let { country, capital, language, population } of countries2) {
  console.log(country, capital, language, population);
}

/*
"Turkey" "ankara" "Turkish" 84.34
"Spain" "Madrid " "Spanish" 47.35
"England" "London" "English" 55.98
"France" "Paris" "French" 67.39
"Germany" "Berlin" "German " 83.24 
*/

//2-  A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

// 3- Write a function called convertArrayToObject which can convert the array to a structure object.
