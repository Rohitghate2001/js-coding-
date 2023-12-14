var num1=87;
var mod=0;
var sum=0;

function sumer(num)
{
while(num!=0)
{
    mod=num%10;
    sum=sum+mod;
    num=parseInt(num/10);
}
if (sum>9)
{
    num=sum;
    sum=0;
    sumer(num);
}
return sum;
}
var result = sumer(98);

console.log(result);

