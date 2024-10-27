// Set Timeout

// console.log("1");


// let counter = setTimeout(() =>{
//     console.log('0');
    
// })


// clearTimeout(counter)

// Set Interval

function timer() {
    let i = 1;
    
    const interval = setInterval(() => {
        if (i < 10) {
            console.log(i);
            i++;
        } else {
            console.log('Happy Birthday');
            clearInterval(interval);  
        }
    }, 2000); 
}

timer();

