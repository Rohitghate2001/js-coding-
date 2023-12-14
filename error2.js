try{
let age = prompt("Enter your age ")
   if(age >138)
   {
    throw new Error("this is probably not true")
   }
   document.write("your age is acceptable")
}
catch(error){
    console.log("Errroe Occured:");
    console.log("Error name -",error.name,"" );
      console.log("Error information -",error.message);
      console.log("Error stack : ",error.stack)

}