// console.log(2>1);
// console.log(2 >=1);
// console.log(2 <1);
// console.log(2 <=1);
// console.log(2 ==1);
// console.log(2 !=1);

console.log("2" > 1);
console.log("02" > 1);

// Key Rule: Comparison Operators (<, <=, >, >=) work differently than ==
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // this is true cuz here null is treated as 0 value

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// Strict checks === ...=> checks the datatype and values

console.log("2" === 2);