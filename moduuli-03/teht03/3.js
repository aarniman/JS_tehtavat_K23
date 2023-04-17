'use strict';
const names = ['John', 'Paul', 'Jones'];
const list = document.getElementById("target")

for (let n of names){
  const li = document.createElement("li")
  li.innerHTML = n
  list.appendChild(li)
}
