'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Member = function () {
  // コンストラクター
  function Member(firstName, lastName) {
    _classCallCheck(this, Member);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  // firstNameプロパティ


  _createClass(Member, [{
    key: 'getName',
    value: function getName() {
      return this.lastName + this.firstName;
    }
  }, {
    key: 'firstName',
    get: function get() {
      return this._firstName;
    },
    set: function set(value) {
      this._firstName = value;
    }

    // lastNameプロパティ

  }, {
    key: 'lastName',
    get: function get() {
      return this._lastName;
    },
    set: function set(value) {
      this._lastName = value;
    }
  }]);

  return Member;
}();

var m = new Member('ゆう', 'ともり');
console.log(m.getName());
