'use strict';

/*function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'hello';
    },
  };
}

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}


function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName:  function() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}
  

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}*/

function makeStudentsReport(data) {
  
  let studentReport = [];
  
  for(let i = 0; i < data.length; i++){
    studentReport.push(`${data[i].name}: ${data[i].grade}`)
  }
  return studentReport;
}
  
function enrollInSummerSchool(students) {

  for (let i = 0; i < students.length; i++){
    students[i].status = 'In Summer School';
  }
  return students;
}