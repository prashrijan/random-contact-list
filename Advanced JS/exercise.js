// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country){
        this.name = name
        this.age = age
        this.country = country
    }

    displayDetails(){
        return `Hello my name is ${this.name}. I am ${this.age} years old and I am from ${this.country}.`
    }
}

const person1 = new Person("Prashrijan", 21, "Nepal")
const person2 = new Person("Shubik", 20, "Nepal")

console.log(person1.displayDetails());
console.log(person2.displayDetails());
