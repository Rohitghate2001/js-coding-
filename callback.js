function addscript(src ,callback)
{
let script=document.createElement("script");
script.src=src;
console.log(script)

script.onload=function(){
    document.write("Script is Loaded : ",src)
    console.log("Onload is running")
    callback();
}
script,onerror=function(){
    
    document.write("Error occured while loDing the script");
}
document.body.appendChild(script);

}
function msg(){
    document.write("the script is loaded")
    console.log(" call back is Running");
}
addscript("ncallbck.js",msg);
