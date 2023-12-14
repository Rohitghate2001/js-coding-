r=document.getElementById("red");
b=document.getElementById("blue");

let black=function(e){
    document.body.style.backgroundColor="black";
}
let red=function(e){
    document.body.style.backgroundColor="red"; 

}

r.addEventListener('click',red)
b.addEventListener('click',black);
var wish=prompt("do you want to remove black event listener y/n");

if(wish=="y")
{
    b.removeEventListener('click',black)
}
black   