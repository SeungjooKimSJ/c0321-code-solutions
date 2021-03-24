var $openModalBtn = document.querySelector('.open-modal-btn');
var $modalContainer = document.querySelector('.modal-container');
var $modalContent = document.querySelector('.modal-content');
var $closeModalBtn = document.querySelector('.close-modal-btn');

$openModalBtn.addEventListener('click', openModal);

$closeModalBtn.addEventListener('click', closeModal);

function openModal(event) {
  $modalContainer.className = 'modal-container off';
  $modalContent.className = 'modal-content';
}

function closeModal(event) {
  $modalContainer.className = 'modal-container';
  $modalContent.className = 'modal-content hidden';
}
