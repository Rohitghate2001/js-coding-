var str ="Hell";
console.log(str)
var arr=['rohit','ghate','rohit'];

arr.forEach(element => {
    console.log(element)
    
});

arr.push("Roll no : 98");

arr.unshift('MR.');
 arr.forEach(element=>
    {

        console.log(element)
    });

    console.log(arr.toString())

    console.log("Strig lenght : ",str.length)

    console.log(str.indexOf('how'));

    console.log(str.lastIndexOf("how"));

    console.log(str.slice(0,4));

    var ind=str.indexOf(" ");



    console.log(str.slice(0,ind));

    var newstr=str.replace("Hello","hii");

    console.log(str);
    console.log(newstr);
    console.log(str[0]);
    var newstr2 =str.split('');
    console.log(newstr2);
   console.log(typeof(newstr2))
   console.log(arr.includes('ghate'));

   arr2=[];

   console.log(arr2);

   for(i=0;i<str.length;i++)
   {
    if(!(arr2.includes(str[i])))
    {
        arr2.push(str[i])
    }
}
   

   console.log(arr2);

    

