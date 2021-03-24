var $inputName = document.querySelector('#user-name');
var $inputEmail = document.querySelector('#user-email');
var $inputMsg = document.querySelector('#user-message');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$inputMsg.addEventListener('focus', handleFocus);
$inputMsg.addEventListener('blur', handleBlur);
$inputMsg.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}
