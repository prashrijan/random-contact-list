// Reverse a String
// Input a String and display its reverse

function reverseStr(str){
    return str.split('').reverse().join('')
}

console.log(reverseStr('Shubik'));

// Get Sum of Array Elements
// Example input : [1, 2, 3, 4, 5]
// output : 15

function sumOfArray(nums){
    let total = nums.reduce((acc, item) => {
        return acc + item
    }, 0)

    return total
}

console.log(sumOfArray([1, 2, 3, 4, 5]));

// Palindrome Checker
// check if a given string is a palindrome
// input : racecar
// output : true

function checkPalindrome(str){
    return str === str.split('').reverse().join('')
}

console.log(checkPalindrome('racecar'));

// Print All Factors
// Input a number and display all of its factorial
// Input: 10
// Output : 1, 2, 5, 10

function printFactorial(num){
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            console.log(i)
        }
    }
}

printFactorial(10)


// Find Largest Number in an Array
// [100, 20, 300, 10, 60]
// Output: 300

function maxNum(nums){

    let maxNum = 0

    for(let i = 0; i < nums.length; i++){
        maxNum = Math.max(maxNum, nums[i])
    }

    return maxNum

}

console.log(maxNum([100, 20, 300, 10, 60]));


// Count Vowels in a String
// Input: Hello World
// Output: 3

function countVowels(str){
    
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++
        }
    }

    return count
}

console.log(countVowels('AEIOU'));


// Remove duplicates from an Array
// [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9]
// Output: [1,2,3,4,5,6,7,9]


function removeDuplicates(nums){

    let set = new Set(nums)

    return Array.from(set)
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9]));


// Factorial of a Number
// Input: 5
// Output: 120

function factorial(num){
    if(num === 1 || num === 0){
        return 1
    }

    return num * factorial(num - 1)
}

console.log(factorial(5));

// Check for Prime Number
// Input :  7
// Output : Prime

const isPrime = (number) => {
    
    let isPrimeNumber = false

    if(number === 1) return `${number} is a prime number`

    for(let i = 2; i < number/2; i++){
        if(number % i === 0){
            isPrimeNumber = false
        }else{
            isPrimeNumber = true
        }
    }

    return isPrimeNumber === true ? `Prime` : `Not Prime`
}

console.log(isPrime(4));


// Temperature Converter
// Get temperature in Celsius and Output Temperature in Fahrenheit
// Input : 0
// Output : 32


function convertInFahrenheit(tempInCelsius){

    return `${tempInCelsius * (9/5) + 32}F`

}

console.log(convertInFahrenheit(100));

// Count Occurance of a character in a String
// String : ‘hello world’
// Character : ‘l’
// Output : 3


function countOccurence(str, target){

    let count = 0

    for(let char of str){
        if(char === target){
            count++
        }
    }

    return count

}

console.log(countOccurence('Prashrijan', 'a'));





function sum(num){

    let total = 0

    while(num > 0){

        let ones = parseInt(num % 10)

        total += ones

        num = parseInt(num / 10)
        
        
    }

    return total
}


console.log(sum(18))