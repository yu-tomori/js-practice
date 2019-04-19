let member = {
  name: '友利', 
  birth: new Date(1998, 11, 18),
  toString() {
    return this.name + ' / 誕生日:' + this.birth.toLocaleDateString();
  }
};

console.log(member.toString());
