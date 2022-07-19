var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/captainplanet24.mp3");

// Theme Button
$(".theme-button").on("click", function() {
  audioElement.play();
});
$(".pause-button").on("click", function() {
  audioElement.pause();
});

var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});
