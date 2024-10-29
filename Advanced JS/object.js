// const person = {
//     firstName : 'Prash',
//     lastName: 'Shrestha',
//     dob: {
//       year: 2003,
//       month: 7,
//       day: 7
//     },
    
//     address: {
//         street: '89 Oaks Avenue',
//         city: 'Dee Why',
//         state: 'NSW',
//         postcode : 2099
//     },
    
//     getYearDiff: function(year){
//         return this.dob.year - year
//     }

//     ,getFullAddress: function(){
//         return `The full address is: ${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.postcode}`
//     },
    
//     getCurrentAge: function(){
//         let currentDate = new Date()
//         let currYear = currentDate.getFullYear()
//         let currMonth = currentDate.getMonth() + 1
//         let currDay = currentDate.getDate()
        
//         let ageInYear = Math.abs(currYear - this.dob.year)
//         let ageInMonth = Math.abs(currMonth - this.dob.month)
//         let ageInDay = Math.abs(currDay - this.dob.day)
        
//         return `${this.firstName} ${this.lastName} is ${ageInYear} years, ${ageInMonth} months, ${ageInDay} days years old.`
//     }
// }






// const makeBio = ({firstName, lastName}) => {
//     return `Hey this is ${firstName}, ${lastName}.`
// }

// console.log(makeBio(person))



// console.log(person.getFullAddress())
// console.log(person.getCurrentAge())

// const {firstName, lastName, ...newObj} = person

// console.log(newObj);

// console.log(firstName);
// console.log(lastName);

const career = {
    work : "DC",
    skills: ["HTML", "CSS","JS"]
}

const newCareer = {...career}

console.log(newCareer);
console.log(career);

newCareer.skills[0] = "Figma"
newCareer.work = 'Kent'

console.log(newCareer);
console.log(career);
