/* 
let myName = "Huy"
let myAge = 28
let myShoeSize = 40

console.log('myName:', myName)
console.log('myShoeSize:', myShoeSize)
console.log('myAge:', myAge)

const myH1 = document.querySelector("h1");
console.log('myH1:', myH1)
myH1.style.background = "green";
*/

log("Mark");
log("Winther");
log("Hansen");

function log(input){
    // Fang body elementet
const bodyEl = document.querySelector(".result");
    // Sæt dens innerHTML til en tekst
bodyEl.innerHTML += input + "<br>";
}
