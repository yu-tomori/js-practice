document.addEventListener('DOMContentLoaded', function() {
 document.getElementById('btn').addEventListener('click', function() {
  var result = document.getElementById('result');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) {
    if (xhr.status === 200) {
     result.textContent = xhr.responseText;
    } else {
     result.textCosntent = 'サーバーエラーが発生しました';
    }
   } else {
    result.textContent = '通信中...';
   }
  };

  xhr.open('GET', 'sample2.pnp?name=' + encodeURIComponent(document.getElementById('name').value), true);
  xhr.send(null);
 }, false);
}, false);
