var $leftArrow = document.querySelector('.arrow-left');
var $rightArrow = document.querySelector('.arrow-right');

var $dots = document.querySelector('.dot-icons');
//get rid ofthese, use ID
var $dot1 = document.querySelector('#dot-1');
var $dot2 = document.querySelector('#dot-2');
var $dot3 = document.querySelector('#dot-3');
var $dot4 = document.querySelector('#dot-4');
var $dot5 = document.querySelector('#dot-5');

var $cards = document.querySelectorAll('.card');

var currentSlide = 0;

//only one listener, use ID
$leftArrow.addEventListener('click', slideLeft);
$rightArrow.addEventListener('click', slideRight);

$dots.addEventListener('click', clickDotIcon);
console.log('dots', $dots)

// setInterval(slideShow, 3000);

//these should be one function -- low priority
function slideLeft(event) {
  $cards[currentSlide].className = 'card hidden';
  currentSlide = currentSlide - 1;

  if (currentSlide === -1) {
    currentSlide = $cards.length - 1;
  }
  $cards[currentSlide].className = 'card';
  //change the dot
}

function slideRight(event) {
  $cards[currentSlide].className = 'card hidden';
  currentSlide = currentSlide + 1;

  if (currentSlide > 4) {
    currentSlide = 0;
  }
  $cards[currentSlide].className = 'card';
  //change the dot
}

// make this one function
function first() {
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


function second() {
  $cards[0].className = 'card hidden';
  $cards[1].className = 'card hidden';
  $cards[3].className = 'card hidden';
  $cards[4].className = 'card hidden';

  $dot1.className = 'far fa-circle';
  $dot2.className = 'fas fa-circle';
  $dot3.className = 'far fa-circle';
  $dot4.className = 'far fa-circle';
  $dot5.className = 'far fa-circle';
}

function third() {
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

function fourth() {
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

function fifth() {
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

function clickDotIcon(event) {

  console.log('clikc target', event.target)
  // change this to switch statement
  if (event.target === $dot1) {
    currentSlide = 0;
    $cards[currentSlide].className = 'card';

    first();
  }

  if (event.target === $dot2) {
    currentSlide = 1;
    $cards[currentSlide].className = 'card';

    second();
  }

  if (event.target === $dot3) {
    currentSlide = 2;
    $cards[currentSlide].className = 'card';

    third();
  }

  if (event.target === $dot4) {
    currentSlide = 3;
    $cards[currentSlide].className = 'card';

    fourth();
  }

  if (event.target === $dot5) {
    currentSlide = 4;
    $cards[currentSlide].className = 'card';

    fifth();
  }
}

function slideShow() {
  $cards[currentSlide].className = 'card hidden';
  currentSlide = currentSlide + 1;

  // change this to switch statement
  if (currentSlide === $cards[0]) {
    first();
  }

  if (currentSlide === $cards[1]) {
    second();
  }

  if (currentSlide === $cards[2]) {
    third();
  }

  if (currentSlide === $cards[3]) {
    fourth();
  }

  if (currentSlide === $cards[4]) {
    fifth();
  }

  if (currentSlide > 4) {
    currentSlide = 0;

    first();
  }
  $cards[currentSlide].className = 'card';
}

/*
clean up code
fix dot two bug
add dot movement to slide
figure out intervals
*/
