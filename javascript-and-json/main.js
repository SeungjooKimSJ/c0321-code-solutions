var books = [
  {
    isbn: '123-4-56-7890',
    title: 'Coffee saves my day',
    author: 'SJ'
  },
  {
    isbn: '098-7-65-4321',
    title: 'I need lunch',
    author: 'Kim'
  },
  {
    isbn: '567-8-90-1234',
    title: 'Sleep solves everything',
    author: 'SJ Kim'
  }
];

console.log('value of books:', books);
console.log('value of typeof books:', typeof books);

var booksJSON = JSON.stringify(books);

console.log('value of booksJSON:', booksJSON);
console.log('value of typeof booksJSON:', typeof booksJSON);

var studentJSON = '{"id": 716, "name": "SJ Kim"}';

console.log('value of studentJSON:', studentJSON);
console.log('value of typeof studentJSON:', typeof studentJSON);

var student = JSON.parse(studentJSON);

console.log('value of student:', student);
console.log('value of typeof student:', typeof student);
