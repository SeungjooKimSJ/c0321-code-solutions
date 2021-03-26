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

console.log('value of JSON.stringify(books):', JSON.stringify(books));
console.log('value of JSON.stringify(typeof books):', JSON.stringify(typeof books));

var student = '{"id": 716, "name": "SJ Kim"}';

console.log('value of JSON.stringify(student):', JSON.stringify(student));
console.log('value of JSON.stringify(typeof student):', JSON.stringify(typeof student));

var object = JSON.parse(student);

console.log('value of object:', object);
console.log('value of typeof object:', typeof object);
