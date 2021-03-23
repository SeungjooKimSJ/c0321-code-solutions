var $background = document.querySelector('.background');
var $bulb = document.querySelector('.bulb');
var isOn = true;

$bulb.addEventListener('click', onAndOff);

function onAndOff(event) {
  if (isOn) {
    $background.className = 'background dark';
    $bulb.className = 'bulb off';
  } else {
    $background.className = 'background light';
    $bulb.className = 'bulb on';
  }
  isOn = !isOn;
}
