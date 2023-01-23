/*window.onload = function(){let v=video,b=body;b.style.backgroundColor="#000",v.width=this.innerWidth,
v.style.top=(this.innerHeight-v.width*.5625)/2+"px";setTimeout(()=>{b.style.backgroundColor="#fff",
load.style.display="none",main.style.display="block";return;},3000);}*/

let video = document.getElementById("video");
video.height = window.innerHeight;

//window.width > video.width
if(window.innerWidth > video.height*0.7013){
    video.style.left = (window.innerWidth-video.height*0.7013)/2 +"px";
}else{};
