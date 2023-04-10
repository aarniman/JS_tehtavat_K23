'use strict'

const names = ["Matt", "Josh", "Ash", "Henry"]

function concat(list){
  let line = "";
  for (let i = 0; i < list.length; i++){
    line = line + list[i];
  }
  return line;
}
let line = concat(names)
document.querySelector('#target').innerHTML = line;