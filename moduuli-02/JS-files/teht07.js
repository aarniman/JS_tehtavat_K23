'use strict'

function dice(side) {
  return Math.floor(Math.random() * side) + 1;
}
let side = parseInt(prompt("Anna nopan tahkojen määrä."))

let list = [];
let number = null;

while (number !== side) {
  number = dice(side);
  list.push(number);
}
console.log(list);

let list2 = document.getElementById("target");
for (const l of list) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(l));
  list2.appendChild(li);
}