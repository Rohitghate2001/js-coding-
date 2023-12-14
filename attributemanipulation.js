// let atr=document.getElementById("div1");
// console.log(atr.getAttribute("class"));
// atr.setAttribute("Class","newclass") 
// atr.setAttribute("style" ,"color :red")
// console.log(atr.hasAttribute("style"));
// console.log(atr.hasAttribute("width"));
// atr.removeAttribute("style");w

let fdiv=document.getElementById("div1");
for(let i=1;i<=5;i++)
{
    div=document.createElement("div");
    div.innerHTML ="<h"+i+">hello i am innerdiv"+i+"<h1/>"
    fdiv.appendChild(div)
}