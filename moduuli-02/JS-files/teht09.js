'use strict'

const numbers = [43, 12, 53, 2, 555, 0, 1]

function even(list){
  let evenList = [];
  list.forEach((l) => {
    if(l % 2 === 0){
      evenList.push(l);
    }
  });

  return evenList;
}

let evenNumbers = even(numbers)

let list2 = document.getElementById("target");
for (const l of numbers) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(l));
  list2.appendChild(li);
}

let list3 = document.getElementById("target2");
for (const l of evenNumbers) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(l));
  list3.appendChild(li);
}