// Truthy Values
// 1, "something_inside", true, [], -2, {}, function(){}

// Falsy Values
// 0, "", false, NaN, null, undefined

// if ("") {
//     console.log("Hello World");
// }

// if (!sayHello) {
//     console.log("Hello World Opposite");
// }


// function sayHello(){
//     return "hello"
// }


// const age = 10

// if(age >= 18 && age <=60 ){
//     console.log("You are an adult");
// }

// const isVip = true

// if(age >=18 || isVip){
//     console.log("Welcome to the party");
    
// }

// if(""){
//     console.log("Hello");
// }else{
//     console.log("Namaste");
// }


// let grade = 10

// if(grade > 90 && grade <= 100){
//     console.log("A+")
// }else if(grade > 80 && grade <= 90){
//     console.log("A");
// }else if(grade > 70 && grade <= 80){
//     console.log("B+");
// }else if(grade > 60 && grade <= 70){
//     console.log("B");
// }else if(grade > 50 && grade <= 60){
//     console.log("C+");
// }else if(grade > 40 && grade <= 50){
//     console.log("C");
// }else{
//     console.log("You Failed");
    
// }

// let date = new Date()

// let day = date.getDay()


// switch(day){
//     case 0:
//         console.log("It's Sunday.");
//         break;
//     case 1:
//         console.log("It's Monday.");
//         break;
//     case 2:
//         console.log("It's Tuesday.");
//         break;
//     case 3:
//         console.log("It's Wednesday.");
//         break;
//     case 4:
//         console.log("It's Thursday.");
//         break;
//     case 5:
//         console.log("It's Friday.");
//         break;
//     case 6:
//         console.log("It's Saturday.");
//         break;
    
//     default:
//         console.log("Something went wrong...");    
// }


// let age = 21

// let val = age >= 18 ? "Hello adult" : "You are a kid"

// console.log(val);


const val = true ?? "N/A"

console.log(val);
