var i = 1;
try{
    i = i * p;
} catch(e) {
    console.log(e.message);
} finally {
    console.log('処理は完了しました.');
}

var x = 1;
var y = 0;
try{
    if (y === 0) {
        throw new Error('0で割ろうとしました.');
    }
    var z = x / y;
} catch(e) {
    console.log(e.message);
}