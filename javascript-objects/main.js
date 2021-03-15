var student = {
  firstName: 'Seungjoo',
  lastName: 'Kim',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Assistance Manager';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Lexus',
  model: 'RX350',
  year: 2012
};

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Rang',
  type: 'Shih Tzu'
};

delete pet.name;
delete pet['type'];

console.log('value of pet:', pet);
