let arr=[];
size=prompt("Enter the number of elements you want to insert in arrray");
var num;
for(i=1;i<=size;i++)
{
    num=prompt(`Enter number ${i} : `);
    arr.push(num); 
}
document.write(arr.toString());