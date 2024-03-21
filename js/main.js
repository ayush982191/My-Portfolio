console.log("Entering at console");
let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
let navbar=document.querySelector(".nav-link");
let navcoll=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListner("click",function(){
        navcoll.classList.remove("show")
    })
})