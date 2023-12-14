var n=prompt("Enter the number : ");
var arr=[];
for(i=1;i<=n;i++)
{
arr.push(i);
}
var fact=arr.reduce((num1,num2)=>
{
    return num1*num2;

}

)
document.write("factorial is : ", fact);