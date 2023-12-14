let arr=[234,423,131,3,234,13,1341,55,6,566,66];
arr.splice(3,0,3434,3432,24,234,434,4)
console.log(arr)
function compare(a,b){
    return a-b;
}
console.table(arr.sort(compare))
newarr=[2,3,4,5,6,7];
squre=newarr.map((value)=>{
    return value*value;
});
str="Rohit Ghate"

arr2=Array.from(str)
console.table(arr2)