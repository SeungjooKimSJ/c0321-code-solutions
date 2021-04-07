var $h1 = document.querySelector('h1');

function helloThere() {
  $h1.textContent = 'Hello There';
}

window.setTimeout(helloThere, 2000);
