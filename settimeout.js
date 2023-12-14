
var arr=[];
const rand=()=>{
    let num=Math.floor(Math.random() *10 )
    arr.push(num);
    document.getElementById("h2").innerHTML=num;
    if(arr.length==5)
{
    document.write(arr.toString())
    clearInterval(tid);
}
}
let tid=setInterval(rand ,2000)
