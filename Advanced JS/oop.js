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


// OOP Challenge 

class Car{
    constructor(model, engine = false){
        this.engine = engine
        this.model = model
    }

    startEngine(){
        if(!this.engine){
            this.engine = true
            return `The ${this.model} engine is ready to drive.`
        }else{
            return `The ${this.model} engine is already to started.`
        }
    }

    drive(){
        if(this.engine){
            return `The ${this.model} is now running.`
        }else{
            return `Please start the car to drive.`
        }
    }

    stopEngine(){
        if(this.engine){
            this.engine = false
            return `The ${this.model} is now stopped.`
        }else{
            return `The engine is not started yet.`
        }
    }
}


let myTesla = new Car("Tesla")


console.log(myTesla.startEngine());
console.log(myTesla.drive());
console.log(myTesla.stopEngine());
console.log(myTesla);

console.log(myTesla.drive());



