let btn = document.getElementById("btn");
window.onscroll=function(){
if(window.scrollY >= 600){
    btn.style.setProperty("display","block");
}
else{
    btn.style.display="none";
}
}
btn.onclick=function(){
    scrollTo({
        top:0,
        left:0,
        behavior:'smooth',
    })
}





