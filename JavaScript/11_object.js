// // const person = {
//     name: "Prashrijan Shrestha",
//     age : 21,
//     isAdult : () => this.age > 18,
//     skills: ["HTML", "CSS", "JS"],
// }

// person.address = "89 Sydney"

// const data = person.skills[1] 
// const {name, age, skills, parents = ["ab, n"], ...restOf} = person

// console.log(person);

// console.log(data)
// console.log(restOf)


// console.log(name, age, skills, parents)

// Shallow Copy / Deep Copy

// Shallow => only first level copy not nested


// Deep copy => copy whole obj

const person = {
    name: "Prashrijan Shrestha",
    age : 21,
    isAdult : () => this.age > 18,
    skills: ["HTML", "CSS", "JS"],
 }


for(let key in person){
    console.log(`${key}`);
    
}
    