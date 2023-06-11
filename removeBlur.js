const today = new Date();
const Xday = new Date("2022-9-10");//こうかいび
console.log(today);
console.log(Xday);

if (today.valueOf() > Xday.valueOf()) {
	//section-blockの見えてる画像
	const backImg = document.querySelectorAll(".back-img");
	for (var i = 0; i < backImg.length; i++){
		backImg[i].src = backImg[i].src.replace("_blured", "");
	}
	//section-blockとsection-artworksのクリックで出る画像とsection-artworksの見えてる画像
	const backImgClick = document.querySelectorAll(".back-img-a");
	for (var i = 0; i < backImgClick.length; i++) {
		backImgClick[i].pathname = backImgClick[i].pathname.replace("_blured", "");
		const value = getComputedStyle(backImgClick[i]).getPropertyValue("--back");
		backImgClick[i].style.setProperty('--back', value.replace("_blured", ""));
	}
	console.log("removed");
}
