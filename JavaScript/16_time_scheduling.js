// // Set Timeout

// // console.log("1");


// // let counter = setTimeout(() =>{
// //     console.log('0');
    
// // })


// // clearTimeout(counter)

// // Set Interval

// function timer() {
//     let i = 1;
    
//     const interval = setInterval(() => {
//         if (i < 10) {
//             console.log(i);
//             i++;
//         } else {
//             console.log('Happy Birthday');
//             clearInterval(interval);  
//         }
//     }, 2000); 
// }

// timer();

const yoyo = ( ) => console.log("0. " + (5 + 6));

console.log("1. log");

setTimeout(( ) => {
    console.log("2. inside frist set timeout");
}, 5000);

console.log("3. after first setTime out");

const sayHey = ( ) => {
    console.log("4. inside sayhey");
    yoyo( );
};

setTimeout(( ) => {
    console.log("5. inside second set timeout");
}, 0);

sayHey( );

console.log("6. last clg");