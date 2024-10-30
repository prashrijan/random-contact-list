
// Pure Function
// const add = (a, b) => {
//     return a + b
// }

// Higher-Order Function that takes function as a input or returns a function
// Eg: Map

const add = (a, b) => {
    return a + b
}
const subtract = (a, b) => {
    return a - b
}

const calculate = (fn, x, y) => {
    return fn(x, y)
}

const result = calculate(add, 2, 3)
console.log(result);
 