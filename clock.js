
const time=()=>{
    let t= new Date()
    let h=t.getHours();
    let m=t.getMinutes();
    let s=t.getUTCSeconds();

a=document.getElementById("h1");
a.innerText=""+h+" : "+m+" : "+s+"";
}
setInterval(time,1000)
