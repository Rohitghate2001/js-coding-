const loadscript=(src)=>{
return new Promise((resolve,reject)=>{
    script=document.createElement("script");
    script.src=src;
    document.body.appendChild(script)
    script.onload=()=>{
        resolve(1)
    }
    script.onerror=()=>{
        reject(0)
    }

})
}
p1=loadscript("loasrc.js");
p1.then((value)=>{
    console.log(value)
}).catch((value)=>{
    console.error("An error occured in the process")
})

