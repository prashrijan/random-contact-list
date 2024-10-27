
function throwError(){
    throw new Error(`hacked`)
}

try {
    throwError()
} catch (err) {
    console.log(err);

    if(err.message === "hacked"){
        console.log('Alert the team.');
    }
}finally{
    console.log(`This will always run`)
}