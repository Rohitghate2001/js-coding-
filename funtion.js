function prime(num)
{
    var flag=true;
    
    for(let i=2;i<num;i++)
    if(num%i==0){
        flag=false;
        break;
    }
   return flag;
}
console.log(prime(8) ? "number is prime " : "number is not prime" )