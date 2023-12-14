p1=new Promise((resolve, reject)=>{
console.log("promise 1 is started : ")
    setTimeout(() => {
              console.log("promise 1 completed")
}, 3000);

resolve()
})
p1.then(()=>{
console.log("After p1")
});
p1.catch(()=>{
    console.error("error occured in p1")
})