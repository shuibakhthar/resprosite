const mnav = document.getElementsByClassName("mobile-nav");
const togglenav = document.getElementsByClassName("toggle-nav");
const marvel = document.getElementsByClassName("marvel");

// window.onload = function(){
// 	temp = document.querySelector("#bhead1");
// 	par = temp.parentElement;
// 	// console.log(par.children);
// 	for (var i = 0; i < par.children.length; i++) {
// 		par.children[i].style.display = "grid";
// 		par.children[i].style.gridTemplateColumns = "repeat(12,8.34vw)";
		
// 		// par.children[i].style.display = "grid";

// 		console.log(par.children[i].children);
// 	}
// }

function myFunction(x) {
	for (var i = 0; i < mnav.length; i++) {
		mnav[i].classList.toggle("open");
	}
	x.classList.toggle("change");
}

function showcontent(x){
	par = x.parentElement;
	if(par.children[3].style.display == "none"){
		par.children[3].style.display = "grid";
		par.children[2].classList.toggle("open");
	}
	else{
		par.children[3].style.display = "none";
		par.children[2].classList.toggle("open");

	}

}

function Tempalte(x){
	return `
	<div class="details" >
		<table>
			<tr>
				<th></th><th></th>
			</tr>
			<tr>
				<td>Title:</td> <td>${x.Title} <sapn> ${x.Year}</sapn></td>
			</tr>
			<tr>
				<td>Runtime:</td><td>${x.Runtime}</td>
			</tr>
			<tr>
				<td>Genre:</td><td>${x.Genre}</td>
			</tr>
			<tr>
				<td>Director:</td><td>${x.Director}</td>
			</tr>
			<tr>
				<td>Plot:</td><td>${x.Plot}</td>
			</tr>

		</table>
			
	</div>
	`
}

function expand(x){
	par = x.parentElement;
	chi = par.children;
	a = x.children[2];
	b = x.children[1].innerHTML;
	col =  x.getAttribute("name");
	nxtcol = x.nextElementSibling;
	precol = x.previousElementSibling;

	for (var i = 0; i < marvelarr.length; i++) {
		if (b == marvelarr[i].Title) {
			a.innerHTML = `${Tempalte(marvelarr[i])}`
		}	
	}

	if(a.style.display =="none"){
		a.style.display = "block";
		x.children[1].style.display = "none";
		x.style.gridColumn = "1/13";
		if(col == "1/7"){
			if (nxtcol != null){
				x.nextElementSibling.style.gridColumn = "1/13";
			}
		}
		else if(col == "4/10"){
			x.previousElementSibling.style.gridColumn = precol.getAttribute("name");;

		}
		else{
			if (precol != null) {
				x.previousElementSibling.style.gridColumn = "1/13";
			}
		}
	}
	else{
		x.children[1].style.display = "block";
		a.style.display = "none";
		x.style.gridColumn = col;
		if (nxtcol != null) {
			x.nextElementSibling.style.gridColumn = nxtcol.getAttribute("name");
		}
		if (precol !=null) {
			x.previousElementSibling.style.gridColumn = precol.getAttribute("name");;
		}
		for (var i = 0; i < chi.length; i++) {
			chi[i].children[1].style.display = "block";
			chi[i].children[2].style.display = "none";
		}
	}	
	
}	
