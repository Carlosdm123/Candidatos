let bannerMaskCreated = false;

banner.style.transform="translateY(0px)";
banner.style.opacity="1";

logo.style.left="50vw";

logoImg.style.opacity="1";
candidateImg.style.opacity="0";

mask1.style.clipPath="inset(0 0 0 100%)";
mask2.style.clipPath="inset(0 0 0 100%)";

mask2.style.zIndex="1";

}

function startBanner(){

resetBanner();

const mask1 = document.getElementById("mask1");
const mask2 = document.getElementById("mask2");
const logo = document.getElementById("logoBox");
const logoImg = document.getElementById("logo");
const candidateImg = document.getElementById("candidateImg");

setTimeout(()=>{

mask1.style.transition="clip-path 0.6s ease";
mask1.style.clipPath="inset(0 0 0 0)";

},100);

setTimeout(()=>{

mask1.style.clipPath="inset(0 1720px 0 0)";

logo.style.transition="left 0.6s ease";
logo.style.left="100px";

setTimeout(()=>{

logoImg.style.opacity="0";
candidateImg.style.opacity="1";

},250);

},1030);

setTimeout(()=>{

mask2.style.zIndex="-1";
mask2.style.clipPath="inset(0 0 0 0)";

},925);

}

function hideBanner(){

const banner=document.getElementById("banner");

banner.style.transition="transform 1.5s ease";
banner.style.transform="translateY(400px)";

}
