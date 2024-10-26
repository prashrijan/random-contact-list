const today = new Date()

console.log(today);

let year = today.getFullYear()

console.log(year);

let day = today.getDay()

console.log(day);

// Challenge 1
// Given a person's date of birth, create a function that calculates and returns their age in years.

let dob = "2003-07-07"

let dobDate = new Date(dob)
let dobYear = dobDate.getFullYear()

let currentDate = new Date()
let currYear = currentDate.getFullYear()

let age = currYear - dobYear

console.log(age)


