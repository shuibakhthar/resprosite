const mnav = document.getElementsByClassName("mobile-nav");
const togglenav = document.getElementsByClassName("toggle-nav");
const marvel = document.getElementsByClassName("marvel");
const dd = document.getElementsByClassName("dd");
const du = document.getElementsByClassName("du");

function myFunction(x) {
	for (var i = 0; i < mnav.length; i++) {
		mnav[i].classList.toggle("open");
	}
	x.classList.toggle("change");
}

function showmarvel(){
	for (var i = 0; i < marvel.length; i++) {
		marvel[i].classList.toggle("open");
	}
	for (var i = 0; i < dd.length; i++) {
		dd[i].classList.toggle("open");
		du[i].classList.toggle("open");
	}

}