//===humburger-menu-buttonのonclick処理(header-site-menuを表示/非表示・ボタンアニメーション)
document.querySelector(".hamburger-menu-button").addEventListener("click", () => {
  const header_site_menu = document.querySelector(".header-site-menu")
  if (header_site_menu.classList.contains("show-header-site-menu")) {
    header_site_menu.classList.remove("show-header-site-menu");
  } else {
    header_site_menu.classList.add("show-header-site-menu");
  }
  //ボタンのアニメーション
  document.querySelector(".hamburger-menu-button").classList.toggle("show-icon-animate")
});

//===アンカーリンクに飛んだ後header-site-menuを非表示/ボタンアニメーションの消去
document.addEventListener("DOMContentLoaded", function () {
  const navElements = document.querySelectorAll("nav");
  navElements.forEach(function (navElement) {
    const aElements = navElement.querySelectorAll("a");
    aElements.forEach(function (link) {
      link.addEventListener("click", () => {
        document.querySelector(".header-site-menu").classList.remove("show-header-site-menu");
        document.querySelector(".hamburger-menu-button").classList.remove("show-icon-animate");
      });
    });
  });
});

//===.all-themeの表示/非表示(アコーディオンメニュー)
// function seeAllTheme(i){
//   const all_theme = document.querySelectorAll(".all-theme");
//   const button_arrow = document.querySelector(".button-arrow");
//   const see_all_theme = document.querySelectorAll(".see-all-theme");

//   //非表示イベント
//   if (all_theme[i].classList.contains("show-all-theme")) {
//     all_theme[i].classList.remove("show-all-theme");
//     button_arrow.classList.remove("rotate-arrow");
//     see_all_theme[i].style.borderBottom = "solid 2px #fff";//borderの重なりを防止

//     //all-themeの非表示
//     all_theme[i].style.maxHeight = "0";
//     setTimeout( () => {
//       all_theme[i].style.border = "solid 0px #fff";
//       all_theme[i].style.padding = "0";
//     },650);
//   //表示イベント
//   } else {
//     all_theme[i].classList.add("show-all-theme");
//     button_arrow.classList.add("rotate-arrow");
//     see_all_theme[i].style.borderBottom = "none";//borderの重なりを防止

//     //all-themeの表示
//     all_theme[i].style.border = "solid 30px #fff";
//     all_theme[i].style.padding = "20px";
//     all_theme[i].style.maxHeight = "1300px";
//   }
// }

//===スムーズスクロール
$(function () {
  $('a[href^=#]').click(function () {
    let speed = 500; // スクロール速度(ミリ秒)
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

//===GoogleMapページ遷移
function goMap() {
  var url = "https://goo.gl/maps/2F2yCdndAbx2hPnt6";
  window.open(url, "_blank");
}

// //===強制水平スクロール
// const horizonflow = document.querySelectorAll("[data-horizonflow]");
// let isScrolling = false;

// horizonflow.forEach(flow => {
//   flow.style.setProperty("height", `${Number(flow.dataset.horizonflow) * 100}vh`);
// });

// window.addEventListener("scroll", () => {
//   if (!isScrolling) {
//     window.requestAnimationFrame(() => {
//       horizonflow.forEach(flow => {
//         const content = [...flow.children].pop();
//         const rect = {
//           flow: flow.getBoundingClientRect(),
//           content: content.getBoundingClientRect()
//         };
//         const rate = Math.min(
//           Math.max(-rect.flow.top / (rect.flow.height - rect.content.height), 0),
//           1
//         );
//         content.scrollTo(rate * (content.scrollWidth - rect.content.width), 0);
//       });
//       isScrolling = false;
//     });
//     isScrolling = true;
//   }
// });

//===programでスクロールを促す矢印の非表示
document.addEventListener("DOMContentLoaded", function () {
  const arrows = document.getElementById("program-arrows");
  document.getElementById("program-list").addEventListener("scroll", () => {
    if(arrows.style.display == "none"){
    } else {
      arrows.style.display = "none";
    }
  });
});

//===plane-imgの表示/非表示
// const planeimg = document.getElementById("plane-img");
// let borderline;
// let elementRight;
// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", () => {
//       if(planeimg.getBoundingClientRect().left < 0){
//         elementRight = (window.innerWidth - planeimg.getBoundingClientRect().left) - planeimg.width;
//       }else if(planeimg.getBoundingClientRect().left >= 0){
//         elementRight = window.innerWidth - (planeimg.getBoundingClientRect().left + planeimg.width);
//       }
//       console.log(elementRight);
//       //ボーダー下
//       if(elementRight <= 0){
//         planeimg.style.display = "none";
//         borderline = window.scrollY - 50;
//       //ボーダー上
//       }else if(borderline > window.scrollY){
//         planeimg.style.display = "block";
//       }
//     });
// });

//===plane-imgによる画面幅バグの修正
const planeimg = document.getElementById("plane-img");
let borderline = 0;
let elementRight;

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    if (planeimg.getBoundingClientRect().left < 0) {
      elementRight = (window.innerWidth - planeimg.getBoundingClientRect().left) - planeimg.width;
    } else if (planeimg.getBoundingClientRect().left >= 0) {
      elementRight = window.innerWidth - (planeimg.getBoundingClientRect().left + planeimg.width);
    }
    // console.log(elementRight);

    // ボーダー下
    if (elementRight <= 0) {
      planeimg.style.display = "none";
      borderline = window.scrollY + 50; // borderlineの値を更新（+50）
    } else if (borderline > window.scrollY) {
      // ボーダー上
      planeimg.style.display = "block";
    }
  });
});


//===first-view背景のレスポンシブ(画像切り替え)
document.addEventListener("DOMContentLoaded", function () {
  imgExchange();
  window.addEventListener("resize", function () {
    imgExchange();
  });
});
function imgExchange() {
  if(window.innerWidth <= 800) {
    document.getElementById("normal-img").style.display = "none";
    document.getElementById("resp-img").style.display = "block";
  } else {
    document.getElementById("normal-img").style.display = "block";
    document.getElementById("resp-img").style.display = "none";
  }
}
