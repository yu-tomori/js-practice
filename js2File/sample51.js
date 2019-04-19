function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyIterator =
// 引数経由で渡された配列をdataプロパティに設定
function MyIterator(data) {
  _classCallCheck(this, MyIterator);

  this.data = data;
  this[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var current, that;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            current = 0;
            that = this;

          case 2:
            if (!(current < that.data.length)) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return that.data[current++];

          case 5:
            _context.next = 2;
            break;

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  });
};

var dates = new MyIterator(['I', 'AM', 'YUU']);
