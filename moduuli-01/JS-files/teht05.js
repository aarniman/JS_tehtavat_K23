'use strict'

const yearStr = prompt("Give me a year.")

const year = parseInt(yearStr)

if (year % 100 == 0){
  if (year % 400 == 0){
    document.querySelector('#target').innerHTML = yearStr + ' is a leap year.';
  } else {
    document.querySelector('#target').innerHTML = yearStr + ' is not a leap year.';
  }
} else {
  if (year % 4 == 0) {
    document.querySelector('#target').innerHTML = yearStr + ' is a leap year.';
  } else {
    document.querySelector('#target').innerHTML = yearStr + ' is not a leap year.';
  }
}