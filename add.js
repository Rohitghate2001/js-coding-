let arr=[5,3,6,8,3,2,4]
var len=arr.length
var even=0
var odd=0
var prime=0


for (i=0;i<len;++i)
{
    var flag=true;
    
       if(arr[i]%2==0)
       {
        even+=arr[i];
        console.log("even ",arr[i]);

        flag=false;
        
       }

       else
       {
        odd+=arr[i];

        console.log("odd ",arr[i]);


        for(var j=(arr[i]-1) ;j > 2 ; --j)
        {
            if(arr[i] % j==0)
            {
                flag=false;
                break;
            }
        }
       
       }
       if(flag || arr[i]==2 )
       {
           prime+=arr[i];
           console.log("prime ",arr[i]);
       }
   
}
console.log("Addition of even numbers present in array is ",even);

console.log("Addition of odd numbers present in array is ",odd);

console.log("Addition of prime numbers present in array is ",prime);


