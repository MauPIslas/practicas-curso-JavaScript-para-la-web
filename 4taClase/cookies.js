document.addEventListener('DOMContentLoaded', initialize);


function initialize (){
  if(Cookies.enabled){
    if(Cookies.get("myKey") != 'myValue'){
      launchCookieAdvisor('Tienes que aceptar las cookies');
    }
  } else{
      launchCookieAdvisor('Tu navegador no acepta cookies, favor de activarlas');
  }
}

function launchCookieAdvisor(menssage) {
  var capaCookies = document.createElement('div');
  capaCookies.setAttribute('id', 'esteid');
  capaCookies.innerHTML = '<p>'+menssage+' <span>Aceptar</span></p>';
  capaCookies.classList.add('avisoCookies');
  var todosLosSpanEnDiv = capaCookies.getElementsByTagName('span');
  todosLosSpanEnDiv.item(0).addEventListener('click', function() {
    if(Cookies.enabled){
      Cookies.set('myKey', 'myValue', {expires: 60 * 60 * 24 * 365})
    }
    $(capaCookies).fadeOut(2000);
  });
  document.body.appendChild(capaCookies);
}
