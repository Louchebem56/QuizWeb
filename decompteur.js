let timer = 5;

document.addEventListener("DOMContentLoaded", function(){
    setInterval(function () {
            timer--;
            document.getElementById("Decompteur").innerHTML = timer;
            if(timer == 0) {
                clearInterval;
                window.location.href = "Page du Quizz.html";
            }
    },1000);
})