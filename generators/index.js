// function* testGenerator(){
//     let i =0
//     while (i<3) {
//         yield i++;
//     }
// }
// test = testGenerator()
// console.log(test.next())
// console.log(test.next())
// console.log(test.next())
// console.log(test.next())

// function* fibbo(i){
//     if (i>1) {
//         yield* fibbo(i-1)+ fibbo(i-2);
//     }else if (i===1) {
//         yield 1;        
//     }else if(i===0){
//         yield 1;
//     }
// }

// function *fibonacci(n) {
//     const infinite = !n && n !== 0;
//     let current = 0;
//     let next = 1;
    
//     while (infinite || n--) {
//       yield current;
//       [current, next] = [next, current + next];
//     }
//   }
  

function *fibonacci(n = null, current = 0, next = 1) {
    if (n === 0) {
      return current;
    }
  
    let m = n !== null ? n - 1 : null;
  
    yield current;
    yield *fibonacci(m, next, current + next);
}
let [...first10] = fibonacci(2000)
console.log(first10[1999])