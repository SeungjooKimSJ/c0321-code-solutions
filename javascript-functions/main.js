function addTwoNumbers(x, y) {
  var sum = x + y;
  return sum;
}

var addTwoNumbersResult = addTwoNumbers(2, 3);

console.log('addTwoNumbersResult:', addTwoNumbersResult);

function convertMintesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMintesToSecondsResult = convertMintesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMintesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Beavis');

console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);

console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResult:', getLastElementResult);
