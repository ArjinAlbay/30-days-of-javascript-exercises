// *********** Exercise: Level 1

// 1- Declare an empty array;

let ex1 = [];

let ex2 = Array();

// 2- Declare an array with more than 5 number of elements

let manav = [`elma`, `portakal`, `erik`, `lahana`, `domates`];

// 3- Find the length of your array
let manav1 = [`elma`, `portakal`, `erik`, `lahana`, `domates`];

console.log(manav.length()); // 5

// Get the first item, the middle item and the last item of the array

console.log(manav[0]); // first
console.log(manav[2]); // middle
console.log(manav[4]); // last

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let hepsi = [
  `elma`,
  { isim: `arjin` },
  false,
  true,
  45,
  65.1,
  function () {
    alert(`selam`);
  },
];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let companies = [
  `Facebook`,
  `Google`,
  `Microsoft`,
  `Apple`,
  `IBM`,
  `Oracle`,
  `Amazon`,
];

// Print the array using console.log()

console.log(companies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

companies.pop();
let x = companies.join(` , `);

console.log(`${x} and Amazon are big IT companies.`);

// Check if a certain company exists in the itCompanies array.  If it exist return the company else return a company is not found

// Filter out companies which have more than one 'o' without the filter method

companies.splice(3, 4);

console.log(companies);

// Sort the array using sort() method

console.log(companies.sort());

// Reverse the array using reverse() method

companies1 = companies.reverse();
console.log(companies1);

// Slice out the first 3 companies from the array

companies2 = companies.slice(0, 3);
console.log(companies2);

// Slice out the last 3 companies from the array

companies3 = companies.slice(4, 7);
console.log(companies3);

// Slice out the middle IT company or companies from the array

console.log(companies.slice(0, 1));

// Remove the first IT company from the array

companies.shift();
console.log(companies);

// Remove the middle IT company or companies from the array

companies.slice(3, 1);

console.log(companies);

// Remove the last IT company from the array

companies.pop();

console.log(companies);

// Remove all IT companies

companies.splice(0, 7);

console.log(companies);

// *********** Exercise: Level 2

// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people I teach HTML CSS JS React Python";

let words = text.split(` `);

console.log(words);

console.log(words.length);

// In the following shopping cart add, remove, edit items

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added

let look = shoppingCart.includes(`Meat`);

if (look == false) {
  shoppingCart.unshift(`Meat`);
  console.log(shoppingCart);
} else console.log(`Meat already added.`);

// add Sugar at the end of you shopping cart if it has not been already added

let look2 = shoppingCart.includes(`Sugar`);

if (look2 == false) {
  shoppingCart.push(`Sugar`);
  console.log(shoppingCart);
} else {
  console.log(`Sugar already added.`);
}

// remove 'Honey' if you are allergic to honey

shoppingCart.pop();

console.log(shoppingCart);

// modify Tea to 'Green Tea'

console.log(shoppingCart.indexOf(`Tea`)); // 2

shoppingCart[2] = "Green Tea";

console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  `Turkey`,
];

let find = countries.indexOf(`Ethiopia`);

console.log(find); // 4

countries[4] = `ETHIOPIA`;

console.log(countries);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let look1 = webTechs.includes(`Sass`);

if (look1 == true) {
  console.log(`Sass is a CSS preprocess`);
} else {
  webTechs.push(`Sass`);
  console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.

let frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

let backEnd = ["Node", "ExprEss", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// *********** Exercise: Level 3

// The following is an array of 10 students ages:

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age

ages.sort();

let ages1 = Math.min(...ages);
let ages2 = Math.max(...ages);

console.log(ages1);
console.log(ages2);

// Find the median age(one middle item or two middle items divided by two)

ages.sort(); // [19,19,20,22,24,24,24,25,25,26]

console.log(ages.length); // 10 => it must be 5,6

console.log(ages.slice(4, 6));

// Find the average age(all items divided by number of items)

let avarege =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[7] +
    ages[8] +
    ages[9] +
    ages[10]) /
  10;

console.log(avarege); // 20.2 we can do it with loop, but its next lesson

// Find the range of the ages(max minus min)

console.log(ages2 - ages1);

// Find the middle country(ies) in the countries array

countries.sort;

console.log(countries); // ["Albania","Bolivia","Canada","Denmark","Ethiopia","Finland","Germany","Hungary","Ireland","Japan","Kenya"]

console.log(countries.length); // 11 => the middle is 6

console.log(countries.slice(5, 6)); // ["Finland"]

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

let two = countries.length;

if ((two %= 2 == 0)) {
  let firstHalf = countries.slice(0, countries.length / 2 - 1);
  let secondHalf = countries.slice(countries.length / 2 - 1, 11);

  console.log(`${firstHalf} and ${secondHalf}`);
} else {
  countries.push(`Turkey`);
  console.log(countries);
}
