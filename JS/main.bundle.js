"use strict";

const getColorData = document.querySelector('#color');
const canvaSelector = document.querySelector('#salida');
getColorData.addEventListener('input', () => {
  const seleccion = getColorData.value; // console.log(seleccion)

  canvaSelector.innerHTML = seleccion;
  canvaSelector.style.background = seleccion;
  canvaSelector.style.color = '#FFF';
});