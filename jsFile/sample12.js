var data1 = new Date(2017, 4, 15);
var data2 = new Date(2017, 5, 20);
var diff = (data2.getTime() - data1.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff + '日の差があります.');