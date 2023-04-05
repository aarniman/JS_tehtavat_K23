'use strict'

const number1 = prompt("Give me 1. number.")
const number2 = prompt("Give me 2. number.")
const number3 = prompt("Give me 3. number.")

const int1 = parseInt(number1)
const int2 = parseInt(number2)
const int3 = parseInt(number3)

const sum = int1 + int2 + int3
const product = int1 * int2 * int3
const avg = sum / 3

document.querySelector('#target').innerHTML = 'Sum is ' + sum + ', product is ' + product + ' and average is ' + avg + '.';