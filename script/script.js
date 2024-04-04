let sidebarOpen = document.querySelector(".fa-bars");
let sidebarClose = document.querySelector(".close");
let modelDrawer = document.querySelector(".model-drawer");
// let sideBarLinks = document.querySelectorAll("side-nav-links");

sidebarOpen.onclick = () =>{
    document.querySelector(".model-drawer").classList.remove("inactive-side-menu");
    // document.body.classList.add("open-sidebar-menu");
    document.body.style.overflowY = "hidden"
}


sidebarClose.onclick = () =>{
    modelDrawer.classList.add("inactive-side-menu");
    document.body.style.overflowY = "visible"
}




// sideBarLinks.onclick = () =>{
//     modelDrawer.classList.add("inactive-side-menu");
// }


// Project carousel

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; 
        
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});

const autoSlide = () => {
    
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// Project Section 
project1 = () => {
    alert("Weather App");
    window.location.href = "https://digitalweatherapp.netlify.app";
}
project2 = () => {
    alert("Temporary Login Form")
    window.location.href = "https://temporaryloginform.netlify.app";
}
project3 = () => {
    alert("My Calculator");
    window.location.href = "https://dynamicallycalculator.netlify.app";
}
project4 = () => {
    alert("Education Hub");
    window.location.href = "https://educationschoolhub.netlify.app";
}
project5 = () => {
    alert("MyTextUtilsApp");
    window.location.href = "https://myfirstreactapptextutils.netlify.app";
}
project6 = () => {
    alert("Responsive Resume");
    window.location.href = "https://myselfwarifali.netlify.app";
}
project7 = () => {
    alert("Sign In and Sign up Form");
    // window.location.href = "";
}
project8 = () => {
    alert("Registration Form");
    // window.location.href = "";
}


//Footer
Onclick = () => {
    window.location.href = document.getElementById("GetInTouch");
}

