/*const vegetable = 'carrot';
let value;

if(hoisted) {
  var fruit = 'apple';
}

if(!hoisted) {
  var fruit = 'banana';
}


function addTenToNum(num) {
  var ten = 10;
  value = ten + num;
}


addTenToNum(5);



console.log('1: ', hoisted);
console.log('2: ', fruit);
console.log('3: ', value);
console.log('4: ', vegetable);


var hoisted = true;*/

var globalVar = 'I am global!';

function concatString(str) {
  window.concat = str + ' ' + globalVar;
}
function logString() {
  console.log(window.concat);
}

// First we'll call concat string..
concatString('I am hungry!');

// Then let's call logString()
logString();