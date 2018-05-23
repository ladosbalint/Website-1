var slideIndex = 1;

var auto = setInterval(function(){
		//document.getElementById("loading").style.display = "none";
		if(slideIndex != 10){
		  	slideIndex += 1;
			showDivs(slideIndex);
		} else {
			slideIndex = 1;
			showDivs(1);
		}
	}, 4000);

function currentDiv(n) {
	clearInterval(auto);
  	showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var labels = document.getElementsByClassName("gallery-label");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  /*for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }*/
  for (i = 0; i < labels.length; i++){
  		labels[i].style.backgroundColor = "rgba(69, 72, 81, 1)";
  }
  x[slideIndex-1].style.display = "block";
  labels[slideIndex-1].style.backgroundColor = "grey";
  //dots[slideIndex-1].className += " w3-white";
}