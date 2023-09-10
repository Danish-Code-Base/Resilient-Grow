var img = document.getElementById('bg');

var slides = ['hero-section.jpg', 'hero-section2.jpg', 'hero-section3.jpg'];

var Start = 0;

function slider() {
    var imgUrl = "./assets/images/" + slides[Start];
    // console.log(img);
    img.style.backgroundImage = 'url(' + imgUrl + ')';

    if (Start < slides.length) {
        Start++;
    }
    else {
        Start = 0;
        var imgUrl = "./assets/images/" + slides[Start];
        // console.log(img);
        img.style.backgroundImage = 'url(' + imgUrl + ')';
    }

}
setInterval(slider, 3000);