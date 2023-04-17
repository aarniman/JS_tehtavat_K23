'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const list = document.getElementById("target")

for (let s of students){
  let option = document.createElement("option")
  option.value += s.id
  option.innerHTML += s.name
  list.appendChild(option)
}
