function* myGenerator(start,end,step){
    let i=start
    while(i<end){
        yield i
        i+=step;
    }
}
const g = myGenerator(3,10,2);
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
