// Efek mengetik nama

const text = "Agung Prasetyo";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();


// Animasi Scroll

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements =
document.querySelectorAll(
'.hidden, .hidden-left, .hidden-right'
);

hiddenElements.forEach((el)=>{

observer.observe(el);

});


// Navbar berubah saat scroll

window.addEventListener("scroll",()=>{

const navbar =
document.getElementById("navbar");

if(window.scrollY > 50){

navbar.classList.add("active");

}else{

navbar.classList.remove("active");

}

});