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
}

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

function findById(items, idNum) {
 
  return items.find(item => item.id === idNum);
 
}



function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length ){
    return false; 
  }

  for (let i = 0; i < expectedKeys.length; i++) { 
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false; 
    } 
  }

  return true; }


const loaf = {
  flour: 300,
  water: 210,
};

console.log(loaf.flour, loaf.water)

loaf.hydration = function(){
  return loaf.water / loaf.flour * 100;
};

console.log(loaf.hydration());


const obj = {
  foo: 'fii',
  bar: 'bii',
  fum: 'fuu',
  quux: 'qii',
  spam: 'spii',
};

for (const brock in obj) {
  const value = obj[brock];
  console.log(brock, value);
}

const hobbitDiet = {
  meals: ['breakfast','second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(hobbitDiet.meals[3]);
*/

/*const brock = {
  name: 'Brock',
  jobTitle: 'unemployed like a boss',
  boss: 'nobody',
};

const marlon = {
  name: 'Marlon',
  jobTitle: 'unemployed like a boss',
  boss: 'nobody',
};

const frank = {
  name: 'Frank',
  jobTitle: 'Founder',
  boss: 'nobody',
};

const chris = {
  name: 'Chris',
  jobTitle: 'Chef',
  boss: 'Frank',
};

let array = [brock, marlon, frank, chris];

for (let i = 0; i < array.length; i++){

  if (array[i].boss === 'nobody'){
    console.log(`${array[i].name} doesn't report to anybody`);
  }
  else{
    console.log(`${array[i].name} reports to ${array[i].boss}`);
  }
}*/

/*const codeWords = 'craft block argon meter bells brown croon droop';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decoder(code){

  let decodedWords = [];
  let cipherKeys = Object.keys(cipher);
  let codeArr = code.split(' ');

  cipherKeys['a']

  for(let i = 0; i < codeArr.length; i++){

    if(codeArr[i][0] === cipherKeys[0]){
      decodedWords.push(codeArr[i][cipher.a-1]);
    }
    else if(codeArr[i][0] === cipherKeys[1]){
      decodedWords.push(codeArr[i][cipher.b-1]);
    } 
    else if(codeArr[i][0] === cipherKeys[2]){
      decodedWords.push(codeArr[i][cipher.c-1]);
    }
    else if(codeArr[i][0] === cipherKeys[3]){
      decodedWords.push(codeArr[i][cipher.d-1]);
    }
    else{
      decodedWords.push(' ');
    }
  }
  return decodedWords.join('');
}

console.log(decoder(codeWords));*/

function createCharacter(name, nickname, race, origin, attack, defense){

  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`)
    },
    evaluateFight(character){
      return `Your opponent takes ${this.attack - character.defense} damage and you receive ${character.attack - this.defense} damage`;  
    },    
  };

}


const characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo','Hobbit','The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Legolas', 'legolas','Elf','Woodland Realm', 8, 5),
    createCharacter('Aragorn son of Arathorn', 'aragorn','Man', 'Dunnendain', 6, 8)
];


console.log(characters.find(character => character.nickname === 'aragorn').describe());

console.log(characters.filter(character => character.race === 'Hobbit'));

console.log(characters.filter(character => character.attack > 5));


/*const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo','Hobbit','The Shire', 2, 1);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const legolas = createCharacter('Legolas', 'legolas','Elf','Woodland Realm', 8, 5);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn','Man', 'Dunnendain', 6, 8);
const 

console.log(legolas.evaluateFight(aragorn));*/