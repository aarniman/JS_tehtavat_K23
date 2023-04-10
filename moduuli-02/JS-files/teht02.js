'use strict'

let amount = parseInt(prompt("Montako osallistujaa?"));
let list = []

for(let i = 0; i < amount; i++){
  let name = prompt("Anna osallistujan nimi.");
  list[i] = name;
}

list.sort()

let list2 = document.getElementById("target");
list.forEach((i)=>{
  let li = document.createElement("li");
  li.innerText = i;
  list2.appendChild(li);
});