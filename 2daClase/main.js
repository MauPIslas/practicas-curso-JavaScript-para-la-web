'use strict'
//This part of the code is for the view in the index
function suma(){
  var a = Number(document.getElementById('sum1').value);
  var b = Number(document.getElementById('sum2').value);
  if (isNaN(a) || isNaN(b)) {
    alert('No introdujiste numeros en la suma, intenta de nuevo')
  }else{
    document.getElementById('rsum').value = a + b;
  }}

function resta(){
  var a = Number(document.getElementById('rest1').value);
  var b = Number(document.getElementById('rest2').value);
  if (isNaN(a) || isNaN(b)) {
    alert('No introdujiste numeros en la resta, intenta de nuevo')
  }else{
    document.getElementById('rrest').value = a - b;
  }}

function multiplicar(){
  var a = Number(document.getElementById('mult1').value);
  var b = Number(document.getElementById('mult2').value);
  if (isNaN(a) || isNaN(b)) {
    alert('No introdujiste numeros en la multiplicación, intenta de nuevo')
  }else{
    document.getElementById('rmult').value = a * b;
  }}

function dividir(){
  var a = Number(document.getElementById('div1').value);
  var b = Number(document.getElementById('div2').value);
  if (isNaN(a) || isNaN(b)) {
    alert('No introdujiste numeros en la división, intenta de nuevo')
  }else{
    document.getElementById('rdiv').value = a / b;
  }}

function limpiar(){
  document.getElementById('sum1').value = "";
  document.getElementById('sum2').value = "";
  document.getElementById('rsum').value = "";

  document.getElementById('rest1').value = "";
  document.getElementById('rest2').value = "";
  document.getElementById('rrest').value = "";

  document.getElementById('div1').value = "";
  document.getElementById('div2').value = "";
  document.getElementById('rdiv').value = "";

  document.getElementById('mult1').value = "";
  document.getElementById('mult2').value = "";
  document.getElementById('rmult').value = "";
}
    //operators buttons
document.getElementById('suma').addEventListener('click',suma)
document.getElementById('resta').addEventListener('click',resta)
document.getElementById('multiplicacion').addEventListener('click',multiplicar)
document.getElementById('division').addEventListener('click',dividir)
    //clear button
document.getElementById('clear').addEventListener('click',limpiar)
    //for the age of the user
document.addEventListener('DOMContentLoaded', function(){
  var age = prompt("Por favor ingresa tu edad para continuar");
  parseInt(age);
  if (age<18){
    alert('No puedes entrar aquí, vete')
  }
})

//This part of code is only for the fifth and sixth exercises in the background
//fifth exercise
var myArray = [1,2,3,4,5,4,5,9,10,45,1,-4,-5,-3,-1]
function checkArray(array){
    for(var index in array){
      if(typeof array[index] !== "number"){
        return false;
      }
    }
    return true;
}
console.log(checkArray(myArray));
//sixth exercise
function valueMax(array){
  var ref = 0
  for(var i in array){
    if(ref<array[i]){
      ref = array[i]
    }
  }
  return ref;
}
function valueMin(array){
  var ref = 0
  for(var i in array){
    if(ref>array[i]){
      ref = array[i]
    }
  }
  return ref;
}
console.log(valueMax(myArray));
console.log(valueMin(myArray));
