// function* testGenerator(){
//     let i =0
//     while (i<10) {
      
//         yield i+=2;
//     }
// }
// test = testGenerator();
// let result = test.next();

// while (!result.done) {
//   console.log(result); // 1 3 5 7 9
//   result = test.next();
//  }

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
let [...fiboArray] = fibonacci(10)
console.log(typeof(fibonacci(10)))

