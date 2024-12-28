
var hitrn=0;
function hit(){
     hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitrn;
}



function makeBubble(){
    var clutter="";
for(var i=1;i<103;i++){
    var rn= Math.floor(Math.random()*10)
   clutter+= ` <div class="bubble">${rn}</div>`;
}
document.querySelector(".pbottom").innerHTML = clutter;
}


Score =0;
function incScore(){
    Score+=10;
    document.querySelector("#score").textContent=Score;
}


var timer= 60;
function runTimer(){
   var t= setInterval(function(){
    if(timer>0)
    {
    timer--;
    document.querySelector("#timer").textContent=timer;
    }
    else{
        clearInterval(t);
        document.querySelector(".pbottom").innerHTML=`<h1 id=End>Game Over</h1>`;
    }
},1000);
}

document.querySelector(".pbottom")
.addEventListener("click",function(dets){
var clickNum=Number(dets.target.textContent);
if(clickNum===hitrn)
{
    incScore();
    makeBubble();
    hit();
}
})

hit();
runTimer();
makeBubble();