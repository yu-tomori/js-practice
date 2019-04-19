class Member {
  // コンストラクター
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // firstNameプロパティ
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  // lastNameプロパティ
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value; 
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member('ゆう', 'ともり');
console.log(m.getName());

