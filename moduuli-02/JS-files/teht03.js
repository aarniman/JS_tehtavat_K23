'use strict'

let list = []

for(let i = 0; i < 6; i++){
  let name = prompt("Anna koiran nimi.");
  list[i] = name;
}

list.sort()
list.reverse()

let list2 = document.getElementById("target");
list.forEach((i)=>{
  let li = document.createElement("li");
  li.innerText = i;
  list2.appendChild(li);
});