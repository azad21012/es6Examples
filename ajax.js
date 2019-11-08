function asyncFetch(a,cb){
    return setTimeout(()=>cb(a+2)
    ,2000)
}
asyncFetch(5)