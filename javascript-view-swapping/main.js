var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', clickTabs);

function clickTabs(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tab.length; i++) {
    if ($tab[i] === event.target) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }

  var $dataView = event.target.getAttribute('data-view');

  for (var k = 0; k < $view.length; k++) {
    if ($view[k].getAttribute('data-view') !== $dataView) {
      $view[k].className = 'view hidden';
    } else {
      $view[k].className = 'view';
    }
  }
}
