// Allowing a function to remember and acess its lexical scope even when its executing outside its original scope
// a function inside a funciton can have access to the variable defined in the parent function even parent function finish executing


// function a(){

//     let counter = 0;

//     return function(){
//         return ++counter
//     }
// }

// let increaseCount = a()

// console.log(increaseCount());


// Interview Question

let counter = 0
for(var i = 0; i < 5; i++){
    function print(){
        console.log(i + " but counter is " + counter++)
    }
    setTimeout(print, 0)
}
