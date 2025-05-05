let score = "33"

let scores = "33abc"

console.log(typeof score);
console.log(typeof (score));  // this is a method 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumbers = Number(scores);
console.log(typeof valueInNumbers);
console.log(valueInNumbers); // Value will be NAN

// "33" => 33
// "33abc" => NaN
// true => 1 ; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0 => false
// "" => false
// "aman" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);