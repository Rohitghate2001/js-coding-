sum=(num)=>{
    let newnum=0;
    while(num>9)
    {
        let rem=num%10;
        newnum=newnum+rem;
       num=parseInt(num/10);
    }
    return newnum;
}
console.log(sum(567));