let promise= new Promise((resolve,reject)=>{
    console.log("promice here")
     resolve(29)
    
})
console.log("hello 1 \n");
setTimeout(function(){
console.log("hello 2 \n");
},3000)
console.log("hello 3 \n");
console.log(promise)