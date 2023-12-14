var str="aabbcccdddyu";
arr=[];
for(let k=0; k<str.length; k++)
{
    if(!(arr.includes(str[k])))
    {
        arr.push(str[k]);
    }
}
// console.log(arr)
for(var i=0;i<arr.length;i++)
{
    var count=0;
    for(var j=0;j<str.length;j++)
    {
        if(arr[i]==str[j])
        {
            count++;
        }
    }
    console.log(arr[i]," : ",count);
}