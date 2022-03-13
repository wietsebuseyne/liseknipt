window.onpopstate = function(event) {
	document.getElementById("myModal").style.display = "none";
	document.getElementById("profiel_modal_div").style.display = "none";
};

function openModal() {
	history.pushState({page: 1}, "Lise Knipt - Kapper aan huis - Foto's");
	document.getElementById("myModal").style.display = "block";
}

function closeModal() {
	history.go(0);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  var img = slides[slideIndex-1].getElementsByTagName("img")[0];
  img.src = "images/" + slideIndex + ".jpg";
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* Profiel */
// Get the modal
var modal = document.getElementById("profiel_modal_div");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("avatar");
var modalImg = document.getElementById("profiel_modal");
//var captionText = document.getElementById("profiel_caption");
img.onclick = function(){
	history.pushState({page: 1}, "Lise Knipt - Kapper aan huis - Profiel");
	modal.style.display = "block";
	modalImg.src = "images/lise.jpg";
	//captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementById("profiel_close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  history.go(0);
} 