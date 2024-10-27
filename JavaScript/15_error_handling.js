
function throwError(){
    throw Error `This is a error`
}

try {
    throwError()
} catch (err) {
    console.log(err);
}finally{
    console.log(`This will always run`)
}