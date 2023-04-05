'use strict'

const name = prompt("What is your name?")
const r = Math.floor(Math.random()*4)+1

if (r == 1){
  document.querySelector('#target').innerHTML = name + ', you are a gryffindor!';
} else if (r == 2){
  document.querySelector('#target').innerHTML = name + ', you are a hufflepuff!';
} else if (r == 3){
  document.querySelector('#target').innerHTML = name + ', you are a ravenclaw!';
} else if (r == 4){
  document.querySelector('#target').innerHTML = name + ', you are a slytherin!';
}