// *********** Exercises: Level 1

// 1- Create a closure which has one inner function

function first() {
  let count = 10;
  function second() {
    count++;
    return count;
  }

  return second;
}

let countFuncs = first();

console.log(countFuncs);
