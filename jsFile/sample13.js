var p = /^[0-9]{1,}/gm;
var str = '101匹のワンちゃん。\n7人の小人';
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}
