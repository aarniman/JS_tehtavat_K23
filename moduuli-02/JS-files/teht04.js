'use strict'

let list = []
let i = 0

while(true){
  let number = parseInt(prompt("Anna numero. 0 lopettaa."))
  if(number == 0){
    break;
  }
  list[i] = number;
  i++;
}

list.sort(function(a, b){
  return b-a;
});

console.log(list)