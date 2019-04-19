'use strict';

Promise.all([asyncProcess('トクジロウ'), asyncProcess('パーティーピーポー'), asyncProcess('')]).then(function (response) {
  console.log(response);
}, function (error) {
  console.log('\u30A8\u30E9\u30FC\uFF1A ' + error);
});
