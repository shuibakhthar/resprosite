const mnav = document.getElementsByClassName("mobile-nav");
const togglenav = document.getElementsByClassName("toggle-nav");


function myFunction(x) {
	for (var i = 0; i < mnav.length; i++) {
		mnav[i].classList.toggle("open");
	}
	x.classList.toggle("change");
}

