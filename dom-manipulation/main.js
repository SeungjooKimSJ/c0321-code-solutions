var $hotBtn = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

var currentClickCount = 0;

$hotBtn.addEventListener('click', function (event) {
  currentClickCount++;

  if (currentClickCount < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (currentClickCount < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (currentClickCount < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (currentClickCount < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (currentClickCount < 16) {
    $hotBtn.className = 'hot-button hot';
  } else {
    $hotBtn.className = 'hot-button nuclear';
  }
  $clickCount.textContent = 'Clicks: ' + currentClickCount;
});
