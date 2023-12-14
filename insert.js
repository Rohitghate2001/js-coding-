var flag=true;
var arr=[];
while(flag)
{
    let data=prompt("Enter value : ")
    arr.push(data)
    flag=confirm("Do you again Wan't to insert value")
    

}
document.write(arr)
let id=document.getElementById("h1");
id.style.color='red';
id.style.background="black";
document.createElement("div")