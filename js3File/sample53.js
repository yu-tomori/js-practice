'use strict';

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('\u5165\u529B\u5024\uFF1A ' + value);
      } else {
        reject('\u5165\u529B\u306F\u7A7A\u3067\u3059');
      }
    }, 500);
  });
}

asyncProcess('トクジロウ').then(function (response) {
  console.log(response);
}, function (error) {
  console.log('\u30A8\u30E9\u30FC\uFF1A ' + error);
});
