function fun1(a,b){
    return b(a+2)
};
function fun2(c){
    return fun1(c,(x)=>x)
}

