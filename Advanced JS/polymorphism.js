class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi! I am " + this.name);
    }
}

class Student extends Person {
    constructor(name, age, studendId) {
        super(name, age);
        this.studendId = studendId;
    }

    greet() {
   	  console.log("Hi! I am " + this.name + ". I am a student")
    }
}

const personObj = new Person("Hari", 25);
personObj.greet();

const studentObj = new Student("Prakash", 28, 10000);
studentObj.greet();