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

const cat = [];

function prependCat(name) {
    cat.push([...cats]);
    cat.unshift(`${name}`);
    return cat;
}
console.log(prependCat("Arnold"));

function removeLastCat() {
    cat[1].pop();
    return cat;
}
console.log(removeLastCat());

function removeFirstCat() {
    cat[1].shift();
    return cat;
}
console.log(removeFirstCat());
console.log(cats);
