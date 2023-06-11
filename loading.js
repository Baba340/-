window.onload = function(){
    //低電力モード検出
    document.getElementById("loadingVideo").play().catch((error) => {
        alert("低電力モードではページが正常に作動しない場合があります。低電力モードを解除して再度読み込んでください。");
    });
    setTimeout(() => {
        //loadingを隠してcontentを見せる
        document.querySelector(".loading").classList.add("loaded");
        document.querySelector(".content").style.visibility = "visible";
    }, 3000);
    //loadingを完全に削除する
    setTimeout(() => {
        document.querySelector(".loading").remove();
    }, 3450);
}