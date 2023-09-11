// navbar section
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("navbarToggle");
    const navbar = document.getElementById("lis");
    const navbarOption = navbar.querySelectorAll("li");
    
    toggleButton.addEventListener("click", function () {
        if (navbar.style.display === "none"|| navbar.style.display === "") {
            navbar.style.display="block";
        } else {
            navbar.style.display = "";
        }
    });
    navbarOption.forEach(function(option){
        option.addEventListener("click", function(){
            navbar.style.display="none";
        });
    })
});

// scroll to navbar places
function scrolltoAbout(event){
    event.preventDefault();
    var aboutsection =document.querySelector('#about-section');
    aboutsection.scrollIntoView({behavior:'smooth'});
}
function scrolltoAbout(event){
    event.preventDefault();
    var aboutsection =document.querySelector('#service-section');
    aboutsection.scrollIntoView({behavior:'smooth'});
}
function scrolltoAbout(event){
    event.preventDefault();
    var aboutsection =document.querySelector('#whyus-section');
    aboutsection.scrollIntoView({behavior:'smooth'});
}
function scrolltoAbout(event){
    event.preventDefault();
    var aboutsection =document.querySelector('#reachus-section');
    aboutsection.scrollIntoView({behavior:'smooth'});
}

// button click to top off the page

// window.onscroll = function(){ scrollFunction()};

// function scrollFunction(){
//     var scrollToTopBtn = document.getElementById("scrollToTopbtn");
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//         scrollToTopBtn.style.display="block";
//     }else{
//         scrollToTopBtn.style.display="none";
//     }
// }

function scrollToTop(){
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
}