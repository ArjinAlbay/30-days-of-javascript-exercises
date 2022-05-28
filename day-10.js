// Exercises:Level 1

// 1- create an empty set

let set0 =  new Set()

// 2- Create a set containing 0 to 10 using loop

let set1 = new Set()

for ( let i=0; i<=10; i++) {
    set1.add(i)
}

console.log(set1); // {0,1,2,3,4,5,6,7,8,9,10}

// 3-  Remove an element from a set

set1.delete(1) 
console.log(set1); // {0,2,3,4,5,6,7,8,9,10}

// 4- Clear a set

set1.clear()
console.log(set1); // {}

// 5- Create a set of 5 string elements from array

let arr = [
    `ali`,
    `ahmet`,
    `mehmet`,
    `can`,
    `arjin`
]

let nameSet = new Set(arr)

console.log(nameSet); // {"ali","ahmet","mehmet","can","arjin"}

// 6- Create a map of countries and number of characters of a country

let countries1 = ["nigeria", "U.S.A", "germany", "england", "italy"]

let countriesMap = new Map()

for (let i = 0; i < countries1.length; i++) {
    countriesMap.set(countries1[i],countries1[i].length);
    
}

console.log(countriesMap); // Map(5) {'nigeria' => 7, 'U.S.A' => 5, 'germany' => 7, 'england' => 7, 'italy' => 5}


// Exercises:Level 2

// Find a union b

let a = [4, 5, 8, 9]
let b = [3, 4, 5, 7]

let c = [...a,...b]

let C = new Set(c)

console.log(C);


// Find a intersection b

let A = new Set(a)
let B = new Set(b)
let intersection = a.filter((num) => B.has(num))
*
console.log(intersection); // [4,5]


// Exercises:Level 3

// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:



