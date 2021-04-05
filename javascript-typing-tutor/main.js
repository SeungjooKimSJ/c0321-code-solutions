var $typingQuote = document.querySelector('.typing-quote');
var $stringQuote = 'grumpy wizards make toxic brew';

for (var i = 0; i < $stringQuote.length; i++) {
  var $span = document.createElement('span');

  $span.textContent = $stringQuote[i];
  $typingQuote.appendChild($span);
}

var spanIndex = 0;
var $allSpans = document.querySelectorAll('span');

document.addEventListener('keydown', quoteKeydown);

function quoteKeydown({ key }) {
  var $eachSpan = $allSpans[spanIndex];

  if (key === $eachSpan.textContent) {
    $eachSpan.className = 'correct hidden';
    spanIndex++;
    $eachSpan = $allSpans[spanIndex];
    $eachSpan.className = 'underbar';
  } else {
    $eachSpan.className = 'incorrect';
  }
}
