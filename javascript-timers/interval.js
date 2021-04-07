var $h1 = document.querySelector('h1');
var $currentNumberH1 = 4;

function countdown() {
  $currentNumberH1--;
  if ($currentNumberH1 > 0) {
    $h1.textContent = $currentNumberH1;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    window.clearInterval(countdown);
  }
}

window.setInterval(countdown, 1000);
