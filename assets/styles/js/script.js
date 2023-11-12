const slide1 =document.querySelector('.slide1');
const slide2 =document.querySelector('.slide2');
const slide3 =document.querySelector('.slide3');
const control1 =document.querySelector('.control1');
const control2 =document.querySelector('.control2');
const control3 =document.querySelector('.control3');

function controlOneLeft() {
    slide1.style.marginLeft ="-125%";
    slide2.style.marginLeft ="0";
    slide1.style.opacity ="0.5";
    slide2.style.opacity ="1";
    control1.style.display="none";
    control2.style.display="block";
    control3.style.display="none";
}
function controlOneRight() {
    slide1.style.marginRight ="-125%";
    slide3.style.marginRight ="0";
    slide1.style.opacity ="0.5";
    slide3.style.opacity ="1";
    control1.style.display="none";
    control3.style.display="block";
    control2.style.display="none";
}

function controlTwoLeft() {
    slide1.style.marginLeft ="0";
    slide2.style.marginLeft ="-125%";
    slide2.style.opacity ="0.5";
    slide1.style.opacity ="1";
    control2.style.display="none";
    control1.style.display="block";
    control3.style.display="none";
}
function controlTwoRight() {
    slide3.style.marginRight ="0";
    slide2.style.marginRight ="-125%";
    slide2.style.opacity ="0.5";
    slide3.style.opacity ="1";
    control2.style.display="none";
    control3.style.display="block";
    control1.style.display="none";
}

function controlThreeLeft() {
    slide2.style.marginLeft ="0";
    slide3.style.marginLeft ="-125%";
    slide3.style.opacity ="0.5";
    slide2.style.opacity ="1";
    control3.style.display="none";
    control1.style.display="none";
    control2.style.display="block";
}
function controlThreeRight() {
    slide1.style.marginRight ="0";
    slide3.style.marginRight ="-125%";
    slide3.style.opacity ="0.5";
    slide1.style.opacity ="1";
    control3.style.display="none";
    control2.style.display="none";
    control1.style.display="block";
}


// page animations
AOS.init();