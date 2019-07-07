

function callAsync1(bool){
    return new Promise((resolve,reject)=>{
        if(bool){
            setTimeout(()=>resolve("hello"),1000)
            
        }else{
            reject('error something')
        }
    })
   
}

function callAsync2(){
    setTimeout(()=>console.log('111'),1000);
}

callAsync1(true)
.then(()=>callAsync2())
.catch(e=>console.log(e))
// callAsync2()

async function callAwait(){
    try{
        response1 = await callAsync1(true)
        console.log(response1)
    }catch(e){
        console.error(e)
    }finally{
        console.log('final')
    }
}

callAwait()