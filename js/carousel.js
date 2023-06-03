/*let index = 1;
startSlideshow(index);

function plusSlides(n) {
  startSlideshow(index += n);
}

function startSlideshow(slidenum) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (slidenum > slides.length) {index = 1}    
  if (slidenum < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[index-1].style.display = "block"; 
}
*/

let index = 1;
startSlideshow(index);

function plusSlides(k) {
  startSlideshow(index += k)
}

function startSlideshow(slide_num) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let totalSlides = slides.length;
    
    if (slide_num > totalSlides) {index = 1;}

    if (slide_num < 1) {
        index = totalSlides;
    }

    for (i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    
    slides[index-1].style.display = "block";
}
