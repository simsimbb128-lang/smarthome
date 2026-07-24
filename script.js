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
const langBtn = document.getElementById("lang-toggle");

let isArabic = false;

langBtn.addEventListener("click", () => {
    if (!isArabic) {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.querySelector('a[href="#"]').textContent = "الرئيسية";
        document.querySelector('a[href="#services"]').textContent = "الخدمات";
        document.querySelector('a[href="#gallery"]').textContent = "المعرض";
        document.querySelector('a[href="#contact"]').textContent = "تواصل معنا";

        document.querySelector(".logo").textContent = "سمارت هوم";

        langBtn.textContent = "English";
        isArabic = true;
    } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.querySelector('a[href="#"]').textContent = "Home";
        document.querySelector('a[href="#services"]').textContent = "Services";
        document.querySelector('a[href="#gallery"]').textContent = "Gallery";
        document.querySelector('a[href="#contact"]').textContent = "Contact";

        document.querySelector(".logo").textContent = "SmartHome";

        langBtn.textContent = "العربية";
        isArabic = false;
    }
});