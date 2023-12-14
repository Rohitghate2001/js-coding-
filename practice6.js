let age=prompt("Enter your age");
age=Number.parseInt(age);

const ans=((age)=>{
    return age>=18?true:false;
});

if(ans==true){
    alert("You can drive");
}
else{
    alert("You can not drive");
}