//2D
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//canvasサイズ設定
let canvasWidth = window.innerWidth,
    canvasHeight = window.innerHeight;
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);

//画面遷移
document.addEventListener("keydown", (e) => {
    if(e.code == "Space"){
        document.getElementById("canvas").style.display = "none";
        document.getElementById("main").style.display = "block";
    }
});

//六光星枠線描画
let oX = canvasWidth,
    oY = canvasHeight;
    r = 140,
    rT = r/2,
    TrT = (3*r)/2,
    rTr = Math.sqrt(3)*r,
    rTrT = (Math.sqrt(3)*r)/2,

    left = [[-rT,rT,r,rT,-rT,-r],[rTrT,rTrT,0,-rTrT,-rTrT,0],],
    bottom = [[0,TrT,TrT,0,-TrT,-TrT,0],[rTr,rTrT,-rTrT,-rTr,-rTrT,rTrT]],
    right = [[rT,r,rT,-rT,-r,-rT],[rTrT,0,-rTrT,-rTrT,0,rTrT]];
function strokeSixStar(color){
    for(let i=0; i<6; i++){
        //左側
        ctx.beginPath();
        ctx.moveTo(oX,oY);//原点
        ctx.lineTo(oX+left[0][i],oY+left[1][i]);//左
        ctx.lineTo(oX+bottom[0][i],oY+bottom[1][i]);//下
        ctx.lineTo(oX,oY);//原点

        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();

        //右側
        ctx.beginPath();
        ctx.moveTo(oX,oY);//原点
        ctx.lineTo(oX+right[0][i],oY+right[1][i]);//右
        ctx.lineTo(oX+bottom[0][i],oY+bottom[1][i]);//下
        ctx.lineTo(oX,oY);//原点
        
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    }
}

//六光星塗りつぶし
function goldSixStar(){
    for(let i=0; i<6; i++){
        //左側
        ctx.beginPath();
        ctx.moveTo(oX,oY);//原点
        ctx.lineTo(oX+left[0][i],oY+left[1][i]);//左
        ctx.lineTo(oX+bottom[0][i],oY+bottom[1][i]);//下
        ctx.lineTo(oX,oY);//原点

        ctx.fillStyle = "gold";
        ctx.fill();
        setTimeout(() => {
            console.log("");
        },1000);
    }
}

//斜線描画
let dx = dy = 0;
let dxS = dyS = 0;
function line(){
    /*ctx.moveTo(oX,oY-200);
    ctx.lineTo(oX+1,oY-200);
    ctx.lineTo(oX+1,oY-199);
    ctx.lineTo(oX,oY-199);
    ctx.lineTo(oX,oY-200);*/
    ctx.fillStyle = "blue";
    for(let i=0; i<600; i+=2){
        ctx.fillRect(oX+dx+i,oY-400+dy+i,1,1);
    }
    dx -= 2;
    dy += 2;
}
function lineS(){
    /*ctx.moveTo(oX,oY-200);
    ctx.lineTo(oX+1,oY-200);
    ctx.lineTo(oX+1,oY-199);
    ctx.lineTo(oX,oY-199);
    ctx.lineTo(oX,oY-200);*/
    ctx.fillStyle = "red";
    for(let i=0; i<600; i+=2){
        ctx.fillRect(oX+dxS-i,oY-400+dyS+i,1,1);
    }
    dxS += 2;
    dyS += 2;
}

//描画
let timerId = setInterval(() => {
    line();
    lineS();
    strokeSixStar("white");

    ctx.textAlign = "center";
    ctx.font = "100px ''";
    ctx.fillStyle = "white";
    ctx.fillText("第77回",oX,oY+340);
    ctx.fillText("修猷大文化祭",oX,oY+450);

    if(dx < -600){
        goldSixStar();
        strokeSixStar("white")
        clearInterval(timerId);
    }
}, 1);
