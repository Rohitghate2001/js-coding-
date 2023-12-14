var a =5;
var nums=[];
for(i=1;i<=a;i++)
{
nums.push(i);
}
let result=nums.reduce((a,b)=>
{
return a+b;
});
console.log(result)
let odd=nums.filter((num)=>{
 return num%2==0;
});
console.log(odd)