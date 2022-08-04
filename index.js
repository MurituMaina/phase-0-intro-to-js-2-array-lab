// Write your solution here!
const cats = [];
cats.push('Milo', 'Otis', 'Garfield');
console.log(cats);

function destructivelyAppendCat(name) {

    cats.push(`${name}`);
    return cats;


    }
console.log(destructivelyAppendCat('Ralph'));


function destructivelyPrependCat(name) {
    cats.unshift(`${name}`);
    return cats;
}
console.log(destructivelyPrependCat('Bob'));

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());


function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());
let catAppendCat=[];
let cat2 =catAppendCat.concat(cats);
console.log(cat2);
function appendCat(name){
   cat2.push(`${name}`);
   return cat2;
}
console.log(appendCat("Broom"));

let catPrepend = [];
catPrepend = catPrepend.concat(cats);
function prependCat(name) {
    catPrepend.unshift(`${name}`);
  return catPrepend;
    
}
console.log(prependCat("Arnold"));
let cat =[];
cat = cat.concat(cats);

function removeLastCat() {
  let cat3 = [];
  let i = cat.pop();
  cat3.push(i);
  return cat3;
}
console.log(removeLastCat());
let catRLC = [];
catRLC = catRLC.concat(cats);
function removeFirstCat() {
  let cat4 = [];
  let i = catRLC.shift();
  cat4.push(i);

  return cat4;
}
console.log(removeFirstCat());
console.log(cats);
