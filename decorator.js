// @log()
// @immutable()
class Example {
//   @time('demo')
  doSomething() {
    for(let i=0;i<10;i=i+1){
        console.log(i)
    }
  }
}
e = new Example()
e.doSomething()