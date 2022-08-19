// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName){
  cats.push(catName)
  return cats;
}
destructivelyAppendCat('Ralph')

function destructivelyPrependCat(catName)
{
  cats.unshift(catName)
  return cats;
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat (){
  cats.pop()
  return cats;
  }
  destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
  cats.shift();
  return cats;
}
destructivelyRemoveFirstCat();

function appendCat(name){
  let catsAppend =[...cats,name]
  // catsAppend.splice(cats.length,0,name)
  return catsAppend
}
appendCat("Broom")

function prependCat(name){
  let cat =[name, ...cats]
  // cat.splice(0,0,name)
  return cat
}
prependCat("Arnold")

function removeLastCat(){
  // let catRemove = [...cats]
  // catRemove.splice(-1,1)
  // return catRemove
  return cats.slice(0,-1)
}
removeLastCat()

function removeFirstCat(){
  // let catsRemove = [...cats]
  // catsRemove.splice(0,1)
  // return catsRemove
  return cats.slice(1)
}
removeFirstCat()















































// const cats = ["Milo", "Otis", "Garfield"];
// cats;

// function destructivelyAppendCat(name) {

//     cats.push(`${name}`);
//     return cats;
//     }
// destructivelyAppendCat('Ralph');


// function destructivelyPrependCat(name) {
//     cats.unshift(`${name}`);
//     return cats;
// }
// destructivelyPrependCat('Bob');

// function destructivelyRemoveLastCat() {
//     cats.pop();
//     return cats;
// }
// destructivelyRemoveLastCat();


// function destructivelyRemoveFirstCat() {
//     cats.shift();
//     return cats;
// }
// destructivelyRemoveFirstCat();


// function appendCat(name){
//   return [...cats, name]; 
// }
 
// function prependCat(name) {
// return [name,...cats];
// }

// function removeLastCat() {

//   return cats.slice(0,cats.length-1);
  
// }


// function removeFirstCat() {
// return cats.slice(1);
// }


