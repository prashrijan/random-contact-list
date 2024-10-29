// const person = {
//     name: 'Prashrijan',
//     age: 21,
    
//     getFullName: function() {
//         return `${this.name}`
//     }
// }

// console.log(person.getFullName());

// Functional Programming
// function person(name, address){
    
//     return {
//         name : name,
//         address : address,
//         bio(){
//         return `Hey this is ${this.name} from ${this.address}`
//         }
//     }
// }

// const prash = person("prash", "sydney")
// console.log(prash)

// class Car{

//     #apiKey
//     constructor(make, model, year){
//         this.make = make
//         this.model = model
//         this.year = year
//         this.#apiKey = "some api key"
//     }

//     getCarInfo(){
//         return `The car is ${this.make} of model ${this.model} of year ${this.year}.`
//     }

//     getApi(){
//         return `${this.#apiKey}`
//     }
// }

// const mazda = new Car("Mazda", "CX-3", 2010)
// const honda = new Car("Hodna", "Accord", 2003)

// console.log(mazda.getApi())
// console.log(mazda.getCarInfo())

// console.log(honda.getApi())


// class Person{
//     constructor(name, age, address){
//         this.name = name
//         this.age = age
//         this.address = address
//     }

//     greet(){
//         return `Hello ${this.name}`
//     }
// }

// class Student extends Person{
//     constructor(name, age, address, course){
//         super(name, age, address)
//         this.course = course
//     }

//     greet(){
//         return `Hello ${this.name}. I am a student.`
//     }
// }


// const person1 = new Person('Prash', 21)
// const student1 = new Student('Shubik', 20,"Sydney", 'BIT')

// console.log(person1);
// console.log(student1.address);



