'use strict'
document.addEventListener('DOMContentLoaded', prepararValidacion);

function prepararValidacion (){
  var form = document.forms.formulname;
  form.addEventListener('submit',validarForm)
  function validarForm(e){
    e.preventDefault();
    var name= this.nombre.value;
    var testName= /^[A-Za-z ]+$/.test(name);
    var mail= this.email.value;
    var sexo= this.sexo.value;
    var valueOfList= this.utilizacion.value;
    var politica= this.privacidad.checked;
    if(name.length < 2 || testName == false){
      console.log('No pasa por nombre');
      return false;
    }
    if(! validateEmail(mail)){
      console.log('No pasa por email');
      return false;
    }
    if(sexo == ''){
      console.log('No pasa por sexo');
      return false;
    }
    if(valueOfList == '0'){
      console.log('No pasa por lista');
      return false;
    }
    if(! politica){
      console.log('No pasa por politica');
      return false;
    }
    this.submit();
  }

};
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
