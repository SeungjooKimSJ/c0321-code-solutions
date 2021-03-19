/* exported getStudentNames */
function getStudentNames(students) {
  var newArr = [];

  for (var i = 0; i < students.length; i++) {
    var studentsName = students[i].name;

    newArr.push(studentsName);
  }
  return newArr;
}
