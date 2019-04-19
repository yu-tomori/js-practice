var data = 'Global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };

function hoge() {
  console.log(this.data);
}

hoge.call(null);
hoge.call(obj1);
hoge.call(obj2);

function hogehoge() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args.join(' / '));
}

hogehoge('Angular', 'React', 'Backbone');


function hogehogehoge() {
  var args = Array.prototype.slice.apply(arguments[1]);
  console.log(args.join(' / '));
}

hogehogehoge(null, ['Angular', 'React', 'Backbone']);
