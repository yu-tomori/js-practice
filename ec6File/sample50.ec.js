// 素数を求めるためのジェネレーター
function* genPrimes() {
  let num = 2; // 素数の開始値
  // 2から順に素数判定し、素数の場合にだけyield(無限ループ)
  while (true) {
    if (isPrime(num)) { yield num; }
    num++;
  }
}

// 引数valueが素数かどうか判定
function isPrime(value) {
  let prime = true;  // 素数かどうかを表すグラフ
  // 2~Math.sqrt(value)で、valueを割り切れる値があるかを判定
  for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      prime = false; // 割り切れたら素数ではない
      break;
    }
  }
  return prime;
}

for (let value of genPrimes()) {
  // 素数が101以上になったら終了
  if (value > 100) { break; }
  console.log(value);
}
