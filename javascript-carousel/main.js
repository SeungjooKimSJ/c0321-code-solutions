var $leftArrow = document.querySelector('.arrow-left');
var $rightArrow = document.querySelector('.arrow-right');
var $dots = document.querySelector('.dot-icons');

var $cards = document.querySelectorAll('.card');

var currentSlide = 0;

$leftArrow.addEventListener('click', slideLeft);
$rightArrow.addEventListener('click', slideRight);

$dots.addEventListener('click', clickDotIcon);

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

function clickDotIcon(event) {
  var $dot1 = document.querySelector('#dot-1');
  var $dot2 = document.querySelector('#dot-2');
  var $dot3 = document.querySelector('#dot-3');
  var $dot4 = document.querySelector('#dot-4');
  var $dot5 = document.querySelector('#dot-5');

  if (event.target === $dot1) {
    currentSlide = 0;
    $cards[currentSlide].className = 'card';

    $cards[1].className = 'card hidden';
    $cards[2].className = 'card hidden';
    $cards[3].className = 'card hidden';
    $cards[4].className = 'card hidden';

    $dot1.className = 'fas fa-circle';
    $dot2.className = 'far fa-circle';
    $dot3.className = 'far fa-circle';
    $dot4.className = 'far fa-circle';
    $dot5.className = 'far fa-circle';
  }

  if (event.target === $dot2) {
    currentSlide = 1;
    $cards[currentSlide].className = 'card';

    $cards[0].className = 'card hidden';
    $cards[2].className = 'card hidden';
    $cards[3].className = 'card hidden';
    $cards[4].className = 'card hidden';

    $dot1.className = 'far fa-circle';
    $dot2.className = 'fas fa-circle';
    $dot3.className = 'far fa-circle';
    $dot4.className = 'far fa-circle';
    $dot5.className = 'far fa-circle';
  }

  if (event.target === $dot3) {
    currentSlide = 2;
    $cards[currentSlide].className = 'card';

    $cards[0].className = 'card hidden';
    $cards[1].className = 'card hidden';
    $cards[3].className = 'card hidden';
    $cards[4].className = 'card hidden';

    $dot1.className = 'far fa-circle';
    $dot2.className = 'far fa-circle';
    $dot3.className = 'fas fa-circle';
    $dot4.className = 'far fa-circle';
    $dot5.className = 'far fa-circle';
  }

  if (event.target === $dot4) {
    currentSlide = 3;
    $cards[currentSlide].className = 'card';

    $cards[0].className = 'card hidden';
    $cards[1].className = 'card hidden';
    $cards[2].className = 'card hidden';
    $cards[4].className = 'card hidden';

    $dot1.className = 'far fa-circle';
    $dot2.className = 'far fa-circle';
    $dot3.className = 'far fa-circle';
    $dot4.className = 'fas fa-circle';
    $dot5.className = 'far fa-circle';
  }

  if (event.target === $dot5) {
    currentSlide = 4;
    $cards[currentSlide].className = 'card';

    $cards[0].className = 'card hidden';
    $cards[1].className = 'card hidden';
    $cards[2].className = 'card hidden';
    $cards[3].className = 'card hidden';

    $dot1.className = 'far fa-circle';
    $dot2.className = 'far fa-circle';
    $dot3.className = 'far fa-circle';
    $dot4.className = 'far fa-circle';
    $dot5.className = 'fas fa-circle';
  }
}
