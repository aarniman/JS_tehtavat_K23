'use strict'

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

trigger.addEventListener('mouseover', A);
trigger.addEventListener('mouseout', B);

function A(){
  target.src = "img/picB.jpg";
}

function B(){
  target.src = "img/picA.jpg";
}