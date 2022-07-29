var i=0;
var images = ['https://placebeard.it/300x300','https://placebeard.it/300x300'];

var duration=2000;

function slideImg() {
    document.slide.src = images[i];

    if(i<images.length -1){
        i++;
    } else{
        i=0;
    }
    console.log("fotoğraf değişti");
    setTimeout("slideImg()", duration);

}

window.onload = slideImg;