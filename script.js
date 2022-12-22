this.onload = function(){
let v=video,b=body;b.style.backgroundColor="#000",v.width=this.innerWidth,
v.style.top=(this.innerHeight-v.width*.5625)/2+"px",v.volume=0,v.autoplay=v.loop=!0;
setTimeout(()=>{b.style.backgroundColor="#fff",load.style.display="none",main.style.display="block";return;},3e3);}
