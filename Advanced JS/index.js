class Person {
    constructor(firstName, lastName, age, isMarried){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.isMarried = isMarried
    }
    
    getFullName(){
        return this.firstName + " " + this.lastName
    }
    
    isAdult(){
        if(this.age > 18){
            return `${this.firstName} is an adult.`
        }else{
            return `${this.firstName} is a minor`
        }
    }
}

const person1 = new Person('Prash', 'Shrestha', 21, false)

console.log(person1)
console.log(person1.getFullName());
console.log(person1.isAdult());
