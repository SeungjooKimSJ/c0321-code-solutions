var $clickBtn = document.querySelector('.click-button');
var $hoverBtn = document.querySelector('.hover-button');
var $dblClickBtn = document.querySelector('.double-click-button');

$clickBtn.addEventListener('click', handleClick);
$hoverBtn.addEventListener('mouseover', handleMouseover);
$dblClickBtn.addEventListener('dblclick', handleDoubleClick);

function handleClick(event) {
  console.log('button clicked');
  console.log('value of event:', event);
  console.log('value of event.target:', event.target);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log('value of event:', event);
  console.log('value of event.target:', event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('value of event:', event);
  console.log('value of event.target:', event.target);
}
