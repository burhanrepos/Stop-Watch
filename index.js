window.onload=function StopWatch(){
    var sec=00;
    var ten=00;
    var appTen=document.getElementById('ten');
    var appSec=document.getElementById('second');
    var btnStart=document.getElementById('btn-start');
    var btnStop=document.getElementById('btn-stop');
    var btnReset=document.getElementById('btn-reset');
    var interval;
    btnStart.onclick=function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);
    }
    btnStop.onclick=function(){
        clearInterval(interval);
    }
    btnReset.onclick=function(){
        clearInterval(interval);
        ten="00";
        sec="00";
        appTen.innerHTML=ten;
        appSec.innerHTML=sec;
    }
    function startTimer() 
    {
        ten++;
        if(ten<=9){
            appTen.innerHTML="0"+ten;
        }
        if(ten>9){
            appTen.innerHTML=ten;
        }
        if(ten>99){
            sec++;
            appSec.innerHTML="0"+sec;
            ten=0;
            appTen.innerHTML="0"+ten;
        }
        if(sec>9){
            appSec.innerHTML=sec;
        }
        
    }
}