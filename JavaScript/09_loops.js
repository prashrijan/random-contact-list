// for (let  i = 0;  i < 10; i++) {
//         if(i === 5){
//             continue
//         }

//         if(i === 8){
//             break
//         }

//         console.log(i);
    
// }


// let nums = []


// for(let i = 0; i < 10; i++){
//     let randomNumber = Math.floor((Math.random() * 10) + 1)

//     if(nums.includes(randomNumber)){
//         continue
//     }
//     console.log(randomNumber);
    

//     nums.push(randomNumber)
// }

// console.log(nums);


const fruits = ["apple", "banana", "mango", "orange"]

// For of Loop

// const upperCaseFruits = []

// for(let fruit of fruits){
    
//     upperCaseFruits.push(fruit.toUpperCase())
    
// }

// console.log(upperCaseFruits);


// For Each

// doesnot do anything to the array and doesnot create a new array
// fruits.forEach((fruit, index, arr) => console.log(fruit, index, arr)) 

// Map
// It allows to create new sub array without mutating the array

// const newData = fruits.map((fruit, index) => {
    
//     return [fruit,index]
// })

// console.log(newData);

// Filter
// needs to return true

// const newData = fruits.filter(fruit => {
//     return fruit.startsWith("b")    
// })

// console.log(newData);
// console.log(fruits);


// Reduce Method
// const cart = [1200, 200, 305, 320, 450, 435]

// const total = cart.reduce((sum, amount) => {
//     return sum + amount
// }, 0)

// First Iteration
// // 0 + 1200 => 1200
// sum updated to = 1200

// Second Iteration
// // 1200 + 200 => 1400
// sum updated to 1400

// and soon 

// console.log(total);

// Every
// does every item in the array passes the condition

// const nums1 = [1, 2, 3, 4, 5, 6, 7, "8", 9]
// const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(nums1.every(num => typeof(num) === 'number'))
// console.log(nums2.every(num => typeof(num) === 'number'))


const cart = [1200, 200, 305, 320, 450, 435]

// console.log(cart.includes(201))

// find returns the first element that satisfies the conditionb


let res = cart.find(item => item > 400)

console.log(res);
