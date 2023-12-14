p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve("PRomice 1")
},2000)
});

p2=new Promise((resolve, reject) => {
   setTimeout(()=>{
    reject(new Error("PRomice 2 has an error"))
},1000)
})

p3=new Promise((resolve, reject) => {
    setTimeout(()=>{

    
    resolve("PRomice 3")
},4000)
})
all_promice=Promise.reject([p1,p2,p3])
all_promice.then((value)=>{
       console.log(value)
});