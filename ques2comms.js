var flag=0;

document.getElementById("see-here").addEventListener("keydown",addcount);
document.getElementById("show").addEventListener("mouseover",dob);

function start()
{

    let timer_val=document.getElementById("timer-value").textContent;
    container=document.getElementById("timer-value");
   flag=1;

   arr=timer_val.split(":");
    hold=setInterval(timer_call,1000);
   let ans=timer_val;
   ans=parseInt(arr[2]);
   var mins=parseInt(arr[1]);
   var hrs=parseInt(arr[0]);
   function timer_call()
   {
       ans=(ans+1);
       if(ans==60) mins=mins+1;
       if(mins==60) hrs=hrs+1;
       ans=ans%60;
       mins=mins%60;
       let printer=hrs+":"+mins+":"+ans;
       container.innerHTML=printer;
       if(flag==0) clearInterval(hold);
   }

}

function stop()
{
    flag=0;
}

function reset()
{
    container.innerHTML="0:0:0";
    clearInterval(hold);
}

function addcount() {
    var v1 = document.getElementById("see-here");
    var v2 = document.getElementById("count");
    
    let ans = v1.value.length;
    v2.value = ans;

}

function dob() {
    var dt = new Date(document.getElementById("dob").value);
    var date = new Date();
    
    if (isNaN(dt)) {
        document.getElementById("show").value = "Invalid Date";
        return;
    }

    var age = Math.floor((date - dt) / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("show").value = age;
}
