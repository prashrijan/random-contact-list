const person = {
    name: "Prashrijan Shrestha",
    age : 21,
    isAdult : () => this.age > 18,
    skills: ["HTML", "CSS", "JS"],
}


const data = person.skills[1]

console.log(person);

console.log(data)
