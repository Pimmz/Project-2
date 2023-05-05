//Timer area
function move() {
    const element = document.getElementById("myBar");   
    let width = 0;
    const id = setInterval(frame, 1000);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
  }
//Game area for cards
var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});