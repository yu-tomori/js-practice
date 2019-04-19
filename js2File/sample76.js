document.addEventListener('DOMContentLoaded', function() {
 var main = document.getElementById('main');
 main.addEventListener('mouseover', function(e) {
  main.innerHTML = 'screen' + e.screenX + '/' + e.screenY + '<br />'
 }, false);
}, false);
