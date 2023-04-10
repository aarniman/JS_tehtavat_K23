'use strict';

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

let list = [];
let number = null;

while (number !== 6) {
  number = dice();
  list.push(number);
}
console.log(list);

let list2 = document.getElementById("target");
for (const l of list) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(l));
  list2.appendChild(li);
}
