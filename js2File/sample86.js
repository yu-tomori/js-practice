console.time('My Timer');
var agent = window.navigator.userAgent.toLowerCase();

var chrome = (agent.indexOf('chrome') > -1) && (agent.indexOf('edge') === -1) && (agent.indexOf('opr') === -1);
console.log('Chrome:' + chrome);

function circle(radius) {
 console.assert(typeof radius === 'number' && radius > 0, '引数は正の整数でなければなりません。');
 return radius * radius * Math.PI;
}
console.log(circle(-2));

console.timeEnd('My Timer');
