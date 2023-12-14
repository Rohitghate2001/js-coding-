let p1=new Promise((resolve,reject)=>{
console.log("promice 1 is running ")
setTimeout(()=>{    
console.log("promise run suceefully ");
resolve("you are ")
},5000)
})

let p2=new Promise((resolve,reject)=>{
    console.log("promise 2 is running")
    setTimeout(()=>{
        reject(new Error("promice 2 has an error"));
    },5000)
})
p3=new Promise((resolve,reject)=>{
    console.log("promise 3 is running")
    setTimeout(()=>{
          console.log("promice 3 is done")
          resolve("done");
    },7000)
    
})
p2.catch((error)=>{
    console.log("error in p2");
})
p1.then((value)=>{
    console.log("p1 returned : ",value)
})

p3.then((msg)=>{
    console.log("p3 = ",msg)
})
