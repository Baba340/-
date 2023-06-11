window.onload = function () {
	var load = document.getElementById("load");
	load.classList.add("loaded");


	animateIt(".grid-2, .button, .theme-popup-button, .block, .googlemap, .paragraph", 0.85);
	animateIt(".hb-gallery-artworks", 0.9);
	animateIt("h1, h2, h3", 0.95);
}
function animateIt(classes, factor) {
	const targets = document.querySelectorAll(classes);
	const position = Math.floor(window.innerHeight * factor);
	//まず全部見えなくする
	for (let i = 0; i < targets.length; i++) {
		targets[i].style.opacity = 0;
	}
	//アニメーション！
	var mainWrapper = document.getElementsByClassName("main-wrapper")[0];
	mainWrapper.addEventListener('scroll', function () {
		for (let i = 0; i < targets.length; i++) {
			let ofsetTop = Math.floor(targets[i].getBoundingClientRect().top);
			if (ofsetTop < position) {
				targets[i].classList.add("animate__fadeIn");
				targets[i].classList.add("animate__animated");
			}
		}
	}, false);
	//すでに存在するなら見せる
	mainWrapper.dispatchEvent(new Event('scroll'));
}
