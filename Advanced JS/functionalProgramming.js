// Functional Programming
// Intialize, Assign and Invoke

// const val = sum(2, 4) + sum(2, 4) + sum(4, 4);
// console.log(val);
// console.log(i);

// Side Effects => modifies the state or interact with the outside world

// Side Effects
// function logMessage(message){
//     console.log(message); -> I/O operation
// }
// let i = 0;
// const sum = (a, b) => {
//   i++; // update memory
//   const total = a + b;
//   return total;
// };

// use less side effects

// No side effect
// function add(a, b) {
//   return a + b;
// }

// Pure Function
// const add1 = (a, b) => {
//   return a + b;
// };

// const add2 = (a, b) => a + b;

// Higher Order Function
// const add = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//   return a - b;
// };

// const calculator = (a, b, fnc) => {
//     return fnc(a, b)
// }

// const val = calculator(2, 3, sub)
// console.log(val);

// const addAndSquare = (a, b) => {
//   const total = a + b;

//   const powerUp = (multiplier) => {
//     return Math.pow(total, multiplier);
//   };
//   return powerUp;
// };

// const val = addAndSquare(2, 3)(2);

// console.log(val);

// const calculator = (a, b, calc) => {
//   return calc(a, b);
// };

// const add = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//     return a - b
// }

// const val = calculator(2, 3, add)

// console.log(val)

// Recursion
// debugger;
// const factorial = (n) => {
//   if (n <= 1) return 1;

//   return n * factorial(n - 1);
// };

// console.log(`The factorial is ${factorial(3)}`);

const money = [10, 20, 40, 40, 25];

const total = (money) => {
  if (money.length === 1) return money[0];
  return money.pop() + total(money);
};

console.log(total(money));
console.log(total([1, 2]));
