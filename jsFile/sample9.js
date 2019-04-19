var data = [2, 3, 4, 5];
data.forEach(function(value, index, array){
    console.log(value * value);
});


var result = data.map(function(value, index, array){
    return value * value;
});
console.log(result);


var data2 = [4, 9, 16, 25];
var result2 = data2.some(function(value, index, array) {
    return value % 3 === 0;
});

if (result2) {
    console.log('3の倍数が見つかりました.');
} else {
    console.log('3の倍数は見つかりませんでした.');
}


var data3 = [4, 9, 16, 25];
var result3 = data.filter(function(value, index, array) {
    return value % 2 ===1;
});

console.log(result3);

