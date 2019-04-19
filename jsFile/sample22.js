function getTriangle(base, height) {
  return base * height / 2;
}

console.log('三角形の面積:' + getTriangle(5, 2));

var getCircle = function(hankei) {
  return hankei ** 2 * Math.PI
};

console.log('円の面積:' + getCircle(5));
