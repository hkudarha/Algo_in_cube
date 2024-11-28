var menu = document.querySelector("#serv ")
var full = document.querySelector("#services")
var flag =0;
menu.addEventListener("click",function(){
if(flag==0){
    full.style.top="0%";
    flag = 1
}
else{
    full.style.top="-100%"; 
    flag = 0
}
})
