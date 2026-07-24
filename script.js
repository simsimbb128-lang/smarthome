// تغيير لون شريط التنقل

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(7,17,29,.85)";
nav.style.backdropFilter="blur(12px)";

}else{

nav.style.background="transparent";

}

});

// قائمة الجوال

const menuBtn=document.getElementById("menu-btn");
const menu=document.getElementById("menu");

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("active");

});