let n=document.getElementsByTagName("nav");
n[0].firstElementChild.style.color="red";
let t1=document.getElementById('t1');
t1.border="5px";
t1.firstElementChild.firstElementChild.style.color="green";
t1.firstElementChild.lastElementChild.style.color="green";
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.color="gold";
});
n[0].style.background='cyan';
