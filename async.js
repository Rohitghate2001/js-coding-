async function weather(){
    puneweather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("30 degree")
    },3000)
    });

    chinchawadweather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("45 degree")
    },5000)
    });
    // puneweather.then(alert);
    // chinchawadweather.then(alert)
    console.log("featching weather details...")
    console.log("featching pune weather details...")
      let punew=await puneweather;
      console.log("pune weather : ",punew)
      console.log("featching chinchwad weather details...")
      let chinchwadw= await chinchawadweather;
      console.log("chinchwad weather : ",chinchwadw)

    }
    let h2=document.createElement("h2")
h2.innerHTML ="weather details"
    let details=weather();
console.log(details)