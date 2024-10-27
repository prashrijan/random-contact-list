const person = {
    firstName : 'Prash',
    lastName: 'Shrestha',
    dob: {
      year: 2003,
      month: 7,
      day: 7
    },
    
    address: {
        street: '89 Oaks Avenue',
        city: 'Dee Why',
        state: 'NSW',
        postcode : 2099
    },
    
    getFullAddress: function(){
        return `The full address is: ${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.postcode}`
    },
    
    getCurrentAge: function(){
        let currentDate = new Date()
        let currYear = currentDate.getFullYear()
        let currMonth = currentDate.getMonth() + 1
        let currDay = currentDate.getDate()
        
        let ageInYear = Math.abs(currYear - this.dob.year)
        let ageInMonth = Math.abs(currMonth - this.dob.month)
        let ageInDay = Math.abs(currDay - this.dob.day)
        
        return `${this.firstName} ${this.lastName} is ${ageInYear} years, ${ageInMonth} months, ${ageInDay} days years old.`
    }
}


console.log(person.getFullAddress())
console.log(person.getCurrentAge())