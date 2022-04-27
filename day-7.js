// 1- Declare a function fullName and it print out your full name.

function fullName() {
  console.log(`arjin albay`);
}

fullName();

// 2 - Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName) {
  return (fullName = `${firstName} ${lastName}`);
}
fullName2(`arjin`, `albay`);
console.log(`your fullname is ${fullName} `);

// 3- Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
  return (sumNums = num1 + num2);
}

addNumbers(9, 8);

console.log(sumNums); // or console.log(addNumbers(9,8))

// 4- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  return (area = length * width);
}
areaOfRectangle(10, 20);
console.log(area); // 200

// 5- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return (perimeter = 2 * (length + width));
}

perimeterOfRectangle(10, 20);

console.log(perimeter); // 60

// 6- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

let volume = (length, width, height) => {
  return length * width * height;
};

console.log(volume(5, 5, 5)); //125

// 7- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

let area = (r) => {
  const PI = 3.14;
  return PI * r ** 2;
};

console.log(area(3)); // 28.26

// 8- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

let circumference = (r) => {
  const PI = 3.14;
  return 2 * PI * r;
};

console.log(circumference(5)); // 31.400000000000002

// 9-Density of a substance is calculated as follows:density= mass/volume1. Write a function which calculates density.

let density = (mass, volume1) => {
  return mass / volume1;
};

console.log(density(8, 2)); // 4

// *******All questions below are solved by the same method.*********

// 10- Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// 11- Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// 12 -Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// 13- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

let BMI = (weight, height) => {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return `Underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Normal weigh`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `Overweight`;
  } else {
    return `Obese`;
  }
};

console.log(BMI(75, 1.7));

//14- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  switch (month) {
    case `september`:
    case `october`:
    case `November`:
      console.log("the season is Autumn");
      break;
    case `december`:
    case `january`:
    case `febuary`:
      console.log("the season is Winter");
      break;
    case `march`:
    case `april`:
    case `may`:
      console.log("the season is Spring");
      break;
    case `june`:
    case `july`:
    case `august`:
      console.log("the season is Summer");
      break;
    default:
      console.log("invalid Month");
  }
  return;
}

checkSeason(`april`); // "the season is Spring"

// 15- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

let findMax = (a, b, c) => {
  return Math.max(a, b, c);
};

console.log(findMax(7, 8, 3)); // 8

// ***********Exercises: Level 2

//  3- Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) {
  for (let arr of array) {
    console.log(arr);
  }
}

let dizi = [1, 2, 3, 4, 5];

printArray(dizi);

function showDateTime() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();

  console.log(`${day}/${month + 1}/${year} ${hour}:${minute}`);
}

showDateTime();

// 5- Declare a function name swapValues. This function swaps value of x to y.

let swapValues = (a, b) => {
  let x = a;
  let y = b;
  console.log(x, y);
};

swapValues(1, 5);

// 6- Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

reverseArray = (newArr) => {
  let newArr1 = [];
  for (let i = 0; i <= newArr.length - 1; i++) {
    newArr1.unshift(newArr[i]);
  }
  console.log(newArr1);
};

let dizi2 = [0, 2, 4, 6, 8, 10];

reverseArray(dizi2);

// 7- Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

capitalizeArray = (arr2) => {
  let newArr2 = [];
  for (let i = 0; i <= arr2.length - 1; i++) {
    newArr2.push(arr2[i]);
  }
  console.log(newArr2);
};

let capitalizedarray = [`a`, `b`, `c`];

let upper = capitalizedarray.toString().toUpperCase().split(`,`);

capitalizeArray(upper);

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

addItem = (item) => {
  let item1 = [];
  for (let i = 0; i <= item.length - 1; i++) {
    item1.push(item[i]);
  }
  console.log(item1);
};

addItem([3, 5, 7, 9]);

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

let removeItem = (index) => {
  let index1 = [`arjin`, `albay`];
  index1.slice(index);
  return index1;
};

removeItem(0);

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
