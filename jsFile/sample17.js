let pet = {
  type: 'スキーホワイトハムスター',
  name: 'キラ',
  description: {
    birth: '2014-02-15'
  }
};

let pet2 = {
  name: '山田きら',
  color: '白',
  description: {
    food: 'ひまわりの種'
  }
};

let pet3 = {
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg'
};

let pets = {};

let merge = Object.assign(pets, pet, pet2, pet3);
console.log(merge);
