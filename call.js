function loadscript(src, callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        document.write("script loaded");
        callback(null,src);

    }
    script.onerror=function (){

        callback(new Error("src got some error : "));
    }
    document.body.appendChild(script);
} 
function msg(error,src){  
    if(error)
    {
        alert("Error occurd while running at :"+src)
    }  
    else{
    alert("run succesfull at : " + src);
}  
}
function gm(){
    alert("gm");
}
loadscript("ncallback.js",msg)  