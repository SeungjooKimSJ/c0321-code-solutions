var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  var messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('value of messageData:', messageData);
  $contactForm.reset();
}
