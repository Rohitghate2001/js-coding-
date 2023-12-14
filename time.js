let id=document.getElementById("btn");
function showtime(){
    const t=new Date();
    let date=t.getUTCDate();
    let hour=t.getHours();
    let minute=t.getMinutes();
    document.getElementById("date").innerHTML=date

}
const t =new Date();
id.addEventListener("click",showtime)
