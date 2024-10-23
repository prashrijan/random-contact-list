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

const upperCaseFruits = []

for(let fruit of fruits){
    
    upperCaseFruits.push(fruit.toUpperCase())
    
}

console.log(upperCaseFruits);
