// Challange #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically 

let arr = []

for(let i = 0; i < 50; i++){
    let randomNumber = Math.floor((Math.random() * 100) + 1)

    arr.push(randomNumber)
}

console.log(arr);



//2. sort the array in descending order
arr.sort((a, b) => b - a)

console.log(arr)

 
//3. get total of the array

const total = arr.reduce((initial, item) => {
    return initial + item
}, 0)

console.log(`Total of the array ${total}`);

 
//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.

const evenPart = arr.filter(item => item % 2 === 0)

console.log(evenPart);

const oddPart = arr.filter(item => item % 2 !== 0)

console.log(oddPart);

 
// 5. remove duplicate number for the original array

let s1 = new Set(arr)

let newArr = Array.from(s1)

console.log(newArr);

 

// Challange #2 create unique array 50 numbers rang between 1 and 100 programmatically