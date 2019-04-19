document.addEventListener('DOMContentLoadee', function() {
 var target = 'http://www.wings.msn.to';
 document.getElementById('btn').addEventListener('click', function() {
  document.getElementById('iframe').contentWindow.postMessage(
   document.getElementById('message').value, target
  );
 }, false);
}, false);
