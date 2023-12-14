let arr=[2,3,4,5,3,2,212,1,23];
let str=arr.toString(); //convert the array into a string.
//console.log(str);

str2=arr.join("_");  //also join the arryy an make a string of it
//console.log(str2)

//push()
let newlen=arr.push(34); // push add the element  in a arrry an returns the new length of a array
console.log(arr);
console.log(newlen);

//pop

var poped=arr.pop();  // remove last elememnt from array an returns the deleted elemeny
 console.log(arr);
 console.log(poped); 

 //shift 

let shiftdel=arr.shift();  //removes first element from array and returns the deleted element

console.log(shiftdel);

//unshift

let arrl=arr.unshift("marks") // add the element fat the begin od the array and return array length
console.log(arrl);
console.log(arr);


//delete - its a oparator like typeof its not methos

console.log(arr.length)

delete arr[0];

//delete don't change the lenght of the array eben after deleting the element

console.log(arr);

console.log(arr.length)

//concat() to join the array

let narr=[24,2,42,3,4,43424]

newarry=arr.concat(narr)
console.log(newarry)

multyarr=newarry.concat(arr,narr); //concat can also concate multyple array

console.log(multyarr);

