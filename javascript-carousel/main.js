var $leftArrow = document.querySelector('.arrow-left');
var $rightArrow = document.querySelector('.arrow-right');
var $dot = document.querySelector('.dot-icons');

var $cards = document.querySelectorAll('.card');

var currentSlide = 0;
var currentDot = 0;

$leftArrow.addEventListener('click', slideLeft);
$rightArrow.addEventListener('click', slideRight);

$dot.addEventListener('click', clickDotIcon);

setInterval(slideRight, 3000);

function slideLeft(event) {
  $cards[currentSlide].className = 'card hidden';
  currentSlide = currentSlide - 1;

  if (currentSlide === -1) {
    currentSlide = $cards.length - 1;
  }
  $cards[currentSlide].className = 'card';
}

function slideRight(event) {
  $cards[currentSlide].className = 'card hidden';
  currentSlide = currentSlide + 1;

  if (currentSlide > 4) {
    currentSlide = 0;
  }
  $cards[currentSlide].className = 'card';
}

// function clickDotIcon(event) {
//   if (currentDot === ) {
//     console.log('hi');
//   } else if (currentDot === ) {
//     console.log('hi2');
//   }
// }
