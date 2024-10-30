// Reursive Function is a funciton that call itself within itself


// let i = 0
// const counter = () => {
//     console.log(i++);
//     counter()
// }

// console.log(counter())

const nums = [23, 3453, 645, 756, 75]


let sum = 0
const addArray = nums => {
    if(!nums.length){
        return sum
    }
    sum += nums.pop()
    return addArray(nums)
}

console.log(addArray(nums));
