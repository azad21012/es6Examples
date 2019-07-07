const reduceArrayObjects =  (array,equality)=>  array.map(u =>
    Object.keys(u).reduce(
        (newObj, key) =>    {
            Object.keys(equality).map(
                (value) => {
                        if(key === value){
                            newObj =  { ...newObj, [equality[value]]:u[key]}
                        }else{
                            newObj =  {...newObj}
                        }
                    } 
                )
                console.log('*********')
                return {...newObj}
            }

        ,{}
    )
);
module.exports = reduceArrayObjects;