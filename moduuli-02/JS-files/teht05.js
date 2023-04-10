'use strict'

let list = []
let i = 0

while(true){
  let number = parseInt(prompt("Anna numero."))
  if(list.includes(number)){
    console.log("Lista sisältää jo annetun arvon " + number);
    break;
  }
  list[i] = number;
  i++;
}

list.sort(function(a, b){
  return a-b;
});

console.log(list)