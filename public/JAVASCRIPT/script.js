// typeing
var typed = new Typed(".typing", {
	strings: ["", "Website Designer", "Web Developer", "Software Developer"],
	typeSpeed: 100,
	loop: true,
});

// Header toggle
let Menubtn = document.getElementById("MenuBtn");
MenuBtn.addEventListener("click", function (e) {
	document.querySelector("body").classList.toggle("mobile-nav-active");
	this.classList.toggle("fa-xmark");
});
