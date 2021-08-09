document.getElementById("canvas").style.display = "none";
document.getElementById("happyBday").style.display = "none";
document.getElementById("starwars").style.display = "none";

function openCard() {
    document.getElementById("happyBday").style.display = "block";
    document.getElementById("preCard").style.display = "none";
    document.getElementById("preCardBtn").style.display = "none";
    setTimeout(function(){ document.getElementById("canvas").style.display = "initial"; }, 1400);
    var audio = document.getElementById("audio");
        audio.play();
    setTimeout(function(){ document.getElementById("starwars").style.display = "initial"; }, 1000);
    setTimeout(function(){ var starWars = document.getElementById('starwars');
    starWars.classList.toggle('fade'); }, 110000);
    
    
  }
