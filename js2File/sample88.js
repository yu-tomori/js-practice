var MyStorage = function(app) {
 this.app = app;
 this.storage = sessionStorage;
 this.data = JSON.parse(this.storage[this.app] || '{}');
};

MyStorage.prototype = {
 getItem: function(key) {
  return this.data[key];
 },
 setItem: function(key, value) {
  this.data[key] = value;
 },
 save: function() {
  this.storage[this.app] = JSON.stringify(this.data);
 }
};

var storage = new MyStorage('JSSample');
storage.setItem('name', 'Yu');
console.log(storage.getItem('name'));
storage.save();
