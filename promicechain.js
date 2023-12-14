let p1=new Promise((resolve,reject)=>{
 console.log("process in p1 is started : ")
 resolve(88)
});
p1.then((value)=>{
    if(value>=30){
        resolve (value-10);
    }
    else{
        reject("rejected value is smaller than 30")
    }
})



