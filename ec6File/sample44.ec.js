class Member {
  // コンストラクター.Railsでいうところのinitializer
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // メソッド
  getName() {
    return this.firstName + this.lastName;
  }
}

let m = new Member('yu', 'tomori');
console.log(m.getName());
