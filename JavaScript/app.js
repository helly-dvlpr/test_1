var topYoffset;
var currentYoffset;
// scroll button js
window.onload = function(){
    document.querySelector("#gototop").classList.add("disp");
   
    topYoffset = window.pageYOffset;
}

window.onscroll = function(){
    currentYoffset = window.pageYOffset;
    if(topYoffset < currentYoffset){
        document.querySelector("#gototop").classList.remove("disp");
        

    }
    else{
        document.querySelector("#gototop").classList.add("disp");
        
    }
    
}
