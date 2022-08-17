// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

// Write your solution here!
const cats = [];
cats.push("Milo", "Otis", "Garfield");
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


let cat2=[];
cat2 = cat2.concat(cats)

function appendCat(name){
 if (cat2.indexOf(name)=== -1){
 cat2.push(name);
 console.log(cat2)
 return cat2; 
}
 
}
appendCat("Broom");
// console.log(cats);
// console.log(cat2);


let catPrepend = [];
catPrepend = catPrepend.concat(cats);
function prependCat(name) {
   catPrepend.unshift(name);
  console.log(catPrepend);
    return catPrepend;
    
}
prependCat("Arnold");


let cat3 =[];
cat3 = cat3.concat(cats);

function removeLastCat() {
 let i =  cat3.pop();
 let rmvLastCat= cat3;
  console.log(rmvLastCat)
  return rmvLastCat;
  
}
removeLastCat();

let cats4 = [];
cats4 = cats4.concat(cats);
function removeFirstCat() {
  let i = cats4.shift();
  let rmvFirstCat = cats4;
console.log(rmvFirstCat)
  return rmvFirstCat;
}
removeFirstCat();

