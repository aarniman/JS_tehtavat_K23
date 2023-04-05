'use strict';

const anwser = confirm('Should I calculate the square root?');

if (anwser == true) {
  const number = prompt('Give me a number.');
  const integ = parseInt(number);
  if (integ < 0) {
    document.querySelector(
        '#target').innerHTML = 'The square root of a negative number is not defined.';
  } else {
    const anw = Math.sqrt(integ);
    document.querySelector('#target').innerHTML = 'The square root of ' +
        number + ' is ' + anw + '.';
  }
} else {
  document.querySelector(
      '#target').innerHTML = 'I will not calculate the square root.';
}