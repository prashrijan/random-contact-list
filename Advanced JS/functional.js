
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

const multiplyBy2 = (val) => {
    return val * 2
}

const calculate = (fn, x, y) => {
    return fn(x, y)
}

const result1 = calculate(add, 2, 3)
const result2 = calculate(subtract, 2, 3)
console.log(result1);
console.log(result2);



 const calc = (a, b) => {

    const total = a + b

    return multiply = (num) => {
        return total * num
    }

 }

 const ttl = calc(2, 3)(5)
 console.log(ttl)

