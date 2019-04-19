document.addEventListener('DOMContentLoaded', function() {
 document.getElementById('btn').addEventListener('click', function() {
   var newWorkerViaBlob = function(relativePath) {
   var baseURL = window.location.href.replace(/\\/g, '/').replace(/\/[^\/]*$/, '/');
   var array = ['importScripts("' + baseURL + relativePath + '");'];
   var blob = new Blob(array, {type: 'text/javascript'});
   var url = window.URL.createObjectURL(blob);
   return new Worker(url);
  };
 var worker = newWorkerViaBlob('../js3File/worker.js');

  
  worker.postMessage({
   'target': document.getElementById('target').value,
   'x': document.getElementById('x').value
  });
  document.getElementById('result').textContent = 'けいさんちゅう...';

  worker.addEventListener('message', function(e) {
   document.getElementById('result').textContent = e.data;
  }, false);

  worker.addEventListener('error', function(e) {
   document.getElementById('result').textContent = e.message;
  }, false);
 }, false)
}, false);
