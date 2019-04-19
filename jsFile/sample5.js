// ループ処理
 // while文
var x = 8;
while(x < 10) {
    console.log('xの値は' + x + 'です.');
    x++;
}

 // do文
 var y = 8;
 do {
     console.log('yの値は' + y + 'です.');
     y++;
 } while(y < 10);

 // for文
for (var z = 8; z < 10; z++) {
    console.log('zの値は' + z + 'です.');
}

 // forin文. 配列でもオブジェクトでもOK!
var data ={ apple:150, orange:100, banana:120 };
for (var key in data) {
    console.log(key + '=' + data[key]);
}

 //for..in文は連想配列を操作するにとどめ、配列の列挙にはfor,for..ofを使うべき.
var data2 = [ 'apple', 'orange', 'banana' ];
Array.prototype.hoge = function () {}
for (var key in data2) {
    console.log(data2[key]);
}

for (var i = 0, len = data2.length; i < len; i++) {
    console.log(data2[i]);
}



