// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
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


function appendCat(name){
  return [...cats, name]; 
}
 
function prependCat(name) {
return [name,...cats];
}

function removeLastCat() {

  return cats.slice(0,cats.length-1);
  
}


function removeFirstCat() {
return cats.slice(1);
}


