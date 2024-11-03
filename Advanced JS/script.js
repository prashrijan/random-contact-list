// let prevVals = []

// function sqaure(n){

//     if(prevVals[n] != null){
//         return prevVals[n]
//     }

//     let result = 0

//     for (let i = 1; i <= n; i++) {
//         for(let j = 1; j <= n; j++){
//             result += 1
//         }
//     }
//     prevVals[n] = result
//     return result
// }

// console.log(sqaure(3009))
// console.log(sqaure(3009))
// console.log(sqaure(3009))
// console.log(sqaure(3009))
// console.log(sqaure(3009))
// console.log(sqaure(3009))

function fib(n, memo = {}) {
  if (n in memo) return memo[n];

  if (n <= 1) {
    return n;
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(41));
console.log(fib(41));
