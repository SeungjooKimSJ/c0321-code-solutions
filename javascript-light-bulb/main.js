var $background = document.querySelector('.background');
var $bulb = document.querySelector('.bulb');
var currentClick = 0;

$bulb.addEventListener('click', onAndOff);

function onAndOff(event) {
  currentClick++;

  if (currentClick % 2 === 0) {
    $background.className = 'background light';
    $bulb.className = 'bulb on';
  } else {
    $background.className = 'background dark';
    $bulb.className = 'bulb off';
  }
}
