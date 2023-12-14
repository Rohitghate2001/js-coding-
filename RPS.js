var use =prompt(`Enter yout choice "R","P","S" ` )
var arr=["R","P","S"];
let randomindex=Math.floor(Math.random() * arr.length)
document.write("YOur choice :",use);
document.write("\\n")
document.write("Computer choice : ",arr[randomindex]);