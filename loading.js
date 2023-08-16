window.addEventListener("DOMContentLoaded", () => {  // //低電力モード検出
  document.getElementById("loading-video").play().catch((error) => {
      Swal.fire({
          html : "低電力モードではページが正常に動作しません",
          icon : "warning",
          showCancelButton : true,
          confirmButtonText : "正常に動作させる",
          cancelButtonText : "このまま続ける",
          allowOutsideClick : false
      }).then((result) => {
          if(result.isConfirmed){
              Swal.fire({
                  html : "低電力モードを解除したら<br>「完了」を押してください", 
                  confirmButtonText : "完了",
                  allowOutsideClick : false
              }).then((result2) => {
                  if(result2.isConfirmed){
                      window.location.reload ();
                  }
              })
          }
      });
  });
  setTimeout(() => {
    //loadingを隠してcontentを見せる
    document.querySelector(".loading").classList.add("loaded");
    document.querySelector(".content").style.display = "block";
    document.querySelector(".content").style.visibility = "visible";
  }, 3000);
  //loadingを完全に削除する
  setTimeout(() => {
    document.querySelector(".loading").remove();
  }, 3450);
});
