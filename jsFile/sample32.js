var jumbo = new function(word) {
  this.name = word;
  this.func = function() {
    alert(this.name);
  }
}("じゃんぼ");

jumbo.func();
