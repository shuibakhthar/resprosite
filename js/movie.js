const mnav = document.getElementsByClassName("mobile-nav");
const togglenav = document.getElementsByClassName("toggle-nav");


function myFunction(x) {
	for (var i = 0; i < mnav.length; i++) {
		mnav[i].classList.toggle("open");
	}
	x.classList.toggle("change");
}

function showmarvel(x){
	const marvel = document.getElementsByClassName("marvel");
	// const mdd = document.getElementsByClassName("mdd");
	// const mdu = document.getElementsByClassName("mdu");
	for (var i = 0; i < marvel.length; i++) {
		marvel[i].classList.toggle("open");
	}
	// for (var i = 0; i < mdd.length; i++) {
	// 	mdd[i].classList.toggle("open");
	// 	mdu[i].classList.toggle("open");
	// 	// if(dd[i].style.display!="none"){
	// 	// 	dd[i].style.display = "none";
	// 	// }
	// 	// else{
	// 	// 	dd[i].style.display="block";
	// 	// }
	// }
	x.classList.toggle("open");

}