var arr=[];

 const random=()=>{
let rnum=Math.floor(Math.random() * 100);

 document.getElementById("h2").innerHTML=""+rnum+""

   arr.push(rnum);
   return rnum;
 }
 setTimeout(function(){
while(arr.length<=10)
{
  random();  
    
}
});