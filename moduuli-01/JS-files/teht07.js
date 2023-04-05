'use strict'

const amountStr = prompt("How many times is a dice rolled?")
const amount = parseInt(amountStr)

let total = 0

for (let i = 0; i < amount; i++){
  const r = Math.floor(Math.random()*6)+1
  total = total + r
}
  document.querySelector('#target').innerHTML = 'The sum of ' + amount + ' dicerolls was ' + total + '.';


