// Write your solution here!
const cats = [];
cats.push('Milo', 'Otis', 'Garfield');
cats;

function destructivelyAppendCat(name) {

    cats.push(`${name}`);
    return cats;


    }
destructivelyAppendCat('Ralph');


function destructivelyPrependCat(name) {
    cats.unshift(`${name}`);
    return cats;
}
destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
destructivelyRemoveLastCat();


function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
destructivelyRemoveFirstCat();
let catAppendCat=[];
let cat2 =catAppendCat.concat(cats);
cat2;
function appendCat(name){
   cat2.push(`${name}`);
   return cat2;
}
appendCat("Broom");

let catPrepend = [];
catPrepend = catPrepend.concat(cats);
function prependCat(name) {
    catPrepend.unshift(`${name}`);
  return catPrepend;
    
}
prependCat("Arnold");
let cat =[];
cat = cat.concat(cats);

function removeLastCat() {
  let cat3 = [];
  let i = cat.pop();
  cat3.push(i);
  return cat;
}
removeLastCat();
let catRLC = [];
catRLC = catRLC.concat(cats);
function removeFirstCat() {
  let cat4 = [];
  let i = catRLC.shift();
  cat4.push(i);

  return catRLC;
}
removeFirstCat();
cats;
