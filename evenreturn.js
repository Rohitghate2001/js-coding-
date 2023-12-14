function even(arr){
let eve=[];
for(num of arr)
{
    if(num%2==0)
    {
        eve.push(num);
    }
}
return eve;
}
let nums=[2,40,3,5,445,4,6,8,65];

console.log(even(nums));
