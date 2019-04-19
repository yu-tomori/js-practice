"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(genPrimes);

// 素数を求めるためのジェネレーター
function genPrimes() {
  var num;
  return regeneratorRuntime.wrap(function genPrimes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          num = 2; // 素数の開始値
          // 2から順に素数判定し、素数の場合にだけyield(無限ループ)

        case 1:
          if (!true) {
            _context.next = 8;
            break;
          }

          if (!isPrime(num)) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return num;

        case 5:
          num++;
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

// 引数valueが素数かどうか判定
function isPrime(value) {
  var prime = true; // 素数かどうかを表すグラフ
  // 2~Math.sqrt(value)で、valueを割り切れる値があるかを判定
  for (var i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % i === 0) {
      prime = false; // 割り切れたら素数ではない
      break;
    }
  }
  return prime;
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = genPrimes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    // 素数が101以上になったら終了
    if (value > 100) {
      break;
    }
    console.log(value);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
