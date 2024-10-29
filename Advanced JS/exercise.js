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


const person1 = new Person()
const person2 = new Person()

// console.log(person1.displayDetails());
// console.log(person2.displayDetails());

// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.


class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    calcArea(){
        return this.width * this.height
    }

    calcPermiter(){
        return 2* (this.width + this.height)
    }
}


const newRecatngle = new Rectangle(20, 19)

// console.log(newRecatngle.calcArea());
// console.log(newRecatngle.calcPermiter());



// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    displayDetails(){
        return `The vehicle ${this.make} of model ${this.model} is of year ${this.year}.`
    }
}

class Car extends Vehicle{
    constructor({make, model, year, numberOfDoor}){
        super(make, model, year)
        this.numberOfDoor = numberOfDoor
    }

    displayDetails(){
        return `The vehicle ${this.make} of model ${this.model} is of year ${this.year} and has ${this.numberOfDoor} doors.`
    }
}

const mazda = {
    make: "Mazda",
    model: "CX-3",
    year : 2010,
    numberOfDoor: 4
}

const vehicle = new Vehicle("Truck", "XYZ", 2010)
const car = new Car(mazda) 



// console.log(vehicle.displayDetails());
// console.log(car.displayDetails());


// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape{

    calcArea(){
        return 0
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }

    calcArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super()
        this.base = base
        this.height = height
    }
    
    calcArea(){
        return 0.5 * this.base * this.height
    }
}

const circle1 = new Circle(5)
const circle2 = new Triangle(10, 12)


console.log(circle1.calcArea());
console.log(circle2.calcArea());
