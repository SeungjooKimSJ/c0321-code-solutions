var $leftArrow = document.querySelector('.arrow-left');
var $rightArrow = document.querySelector('.arrow-right');

var $cards = document.querySelectorAll('.card');

var currentSlide = 0;

$leftArrow.addEventListener('click', clickLeftArrowIcon);
$rightArrow.addEventListener('click', clickRightArrowIcon);

function clickLeftArrowIcon(event) {
  $cards[currentSlide].className = 'card hidden';
  currentSlide = currentSlide - 1;

  if (currentSlide === -1) {
    currentSlide = $cards.length - 1;
  }
  $cards[currentSlide].className = 'card';
}

function clickRightArrowIcon(event) {
  $cards[currentSlide].className = 'card hidden';
  currentSlide = currentSlide + 1;

  if (currentSlide > 4) {
    currentSlide = 0;
  }
  $cards[currentSlide].className = 'card';
}
