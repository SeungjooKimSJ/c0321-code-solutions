var $background = document.querySelector('.background');
var $bulb = document.querySelector('.bulb');
var isOn = true;

$bulb.addEventListener('click', onAndOff);

function onAndOff(event) {
  if (isOn) {
    $background.className = 'background light';
    $bulb.className = 'bulb on';
  } else {
    $background.className = 'background dark';
    $bulb.className = 'bulb off';
  }
  isOn = !isOn;
}
