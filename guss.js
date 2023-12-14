var num=Math.floor(Math.random() * 10 + 1);
var guess;
guess=prompt("guess the number");
while(true){
   
    if(guess<num)
    {
        guess=prompt("guess is smallerl than the number");
    }
    else if(guess>num){

        guess=prompt("guess is greter than the number");
            
    }
    else{
        document.write("You have guessed right the number is : ",guess);
        break;
        
    }
}

