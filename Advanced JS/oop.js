// const person = {
//     name: 'Prashrijan',
//     age: 21,
    
//     getFullName: function() {
//         return `${this.name}`
//     }
// }

// console.log(person.getFullName());

function person(name, address){
    
    return {
        name : name,
        address : address,
        bio(){
        return `Hey this is ${this.name} from ${this.address}`
        }
    }
}

const prash = person("prash", "sydney")
console.log(prash)

