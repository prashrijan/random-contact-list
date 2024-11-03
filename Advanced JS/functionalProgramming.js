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
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
// Recursion
