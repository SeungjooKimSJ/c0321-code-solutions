var $typingQuote = document.querySelector('.typing-quote');
var $stringQuote = 'grumpy wizards make toxic brew';

for (var i = 0; i < $stringQuote.length; i++) {
  var $span = document.createElement('span');

  $span.textContent = $stringQuote[i];
  $typingQuote.appendChild($span);
}
