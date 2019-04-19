var result = 0;
for (var i = 1; i <= 100; i++) {
    result += i;
    if (result > 1000) { break; }
}
console.log('合計値が1000を超えるのは' + i + 'です.');

var result2 = 0;
for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    result2 += i;
}
console.log('合計:' + result2 );

document.write('<br />')

for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        var k = i * j;
        if (k > 30) { break; }
        document.write(k + '&nbsp');
    }
    document.write('<br />');
}

document.write('<br />');

kuku :
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        var k = i * j;
        if (k > 30) { break kuku; }
        document.write(k + '&nbsp');
    }
    document.write('<br />');
} // kuku:とラベリングすることで、break;などの適応範囲をラベルで指定できるようになる.


