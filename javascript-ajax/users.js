var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log('xhr.status value:', xhr.status);
  console.log('xhr.response value:', xhr.response);

  var listOfUsers = xhr.response;

  for (var i = 0; i < listOfUsers.length; i++) {
    var user = listOfUsers[i];

    var $li = document.createElement('li');
    $li.textContent = user.name;

    $userList.appendChild($li);
  }
});

xhr.send();
