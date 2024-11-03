function flatternArray1(arr){
    
    let flattenedArray = []

    function helper(innerArray){
        for(let i = 0; i < innerArray.length; i++){
            if(Array.isArray(innerArray[i])){
                helper(innerArray[i])
            }else{
                flattenedArray.push(innerArray[i])
            }
        }    
    }

    helper(arr)
    return flattenedArray
}

// console.log(flatternArray1([1, [2, [3, [4]], 5]]))

const flatternArray2 = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flatternArray2(item) : item)
    }, [])
}
// console.log(flatternArray2([1, [2, [3, [4]], 5]]))




