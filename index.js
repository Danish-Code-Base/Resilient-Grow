document.querySelector(".menu").addEventListener("click", function () {

    // for displaying nav-links

    document.querySelector(".nav-links").classList.toggle("d-none");

    // for showing close button

    document.querySelector(".menu").classList.toggle("d-none");

    document.querySelector(".close").classList.toggle("di-none");
    
});

document.querySelector(".close").addEventListener("click", function () {

    // for closing nav-links

    document.querySelector(".nav-links").classList.toggle("d-none");

    // for showing menu button

    document.querySelector(".menu").classList.toggle("d-none");

    document.querySelector(".close").classList.toggle("di-none");
    
});