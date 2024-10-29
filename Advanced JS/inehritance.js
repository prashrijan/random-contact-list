// class Living{
//     constructor({name, age, gender}){
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
// }


// class Human extends Living{
//     constructor({education, address, ...rest}){
//         super(rest)
//         this.education = education
//         this.address = address
//     }
// }



// const Prash = {
//     name : "Prashrijan Shrestha",
//     age: 21,
//     gender: "Male",
//     education : "Bachelors of IT",
//     address: "Sydney"
// }

// const person1 = new Human(Prash)

// console.log(person1);


// class Animal extends Living{
//     constructor({color, ...rest}){
//         super(rest)
//         this.color = color
//     }
// }

// const tom = {
//     name: "Tommy",
//     age: 2,
//     gender: "Male",
//     color: "black"
// }


// const myCat = new Animal(tom)

// console.log(myCat);



class Person {
    constructor({name, age}){
        this.name = name
        this.age = age
    }
}

class Student extends Person{
    constructor({school, ...rest}){
        super(rest)
        this.school = school
    }
}

const person = {
    name: "Prash",
    age: 21
}

const student = {
    name: "Shubik",
    age: 20,
    school: "DCA"
}

const person1 = new Person(person)

const student1 = new Student(student)

console.log(person1);
console.log(student1);

