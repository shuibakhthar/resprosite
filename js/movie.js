
const mnav = document.getElementsByClassName("mobile-nav");
const togglenav = document.getElementsByClassName("toggle-nav");
const marvel = document.getElementsByClassName("marvel");


function myFunction(x) {
	for (var i = 0; i < mnav.length; i++) {
		mnav[i].classList.toggle("open");
	}
	x.classList.toggle("change");
}

function showmarvel(x){
	for (var i = 0; i < marvel.length; i++) {
		marvel[i].classList.toggle("open");
	}
	// 	// if(dd[i].style.display!="none"){
	// 	// 	dd[i].style.display = "none";
	x.classList.toggle("open");
}

function expand(x){
	if(x.children[2].style.display =="none"){
		x.children[2].style.display = "block";
	}
	else{
		x.children[2].style.display = "none";
	}
}	
