let time=300;

const timer=document.getElementById("timer");

setInterval(()=>{

let minutes=Math.floor(time/60);
let seconds=time%60;

timer.innerText=
`${minutes}:${seconds<10?"0":""}${seconds}`;

time--;

if(time<0){
window.location.href="result.html";
}

},1000);