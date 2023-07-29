//Q1
export class Animal {
  constructor(name,age,legs=4,color,sound,type="Mamel") {
    this.name = name
    this.age = age
    this.legs = legs
    this.color = color
    this.sound = sound
    this.type = type
  }
  
  get getAnimalSound() {
    return this.sound;
  }
  
  set setAnimalSound(how_it_sounds) {
    this.sound = how_it_sounds;
  }

  static animal_meta() {
    return "a JS object.";
  }
  
  describeAnimal() {
    return `${this.name} is a ${this.color} color ${this.type}.`+
      ` It is ${this.age} years old. It has ${this.legs} legs & sounds just like '${this.sound}'.`;
  }
}

//Q2
class Dog extends Animal {
  constructor(name,age,legs,color,sound,type) {
    super(name,age,legs,color,sound,type);
  }

  retrieve_meta() {
    return Animal.animal_meta();
  }
}

class Cat extends Animal {
  constructor(name,age,legs,color,sound,type) {
    super(name,age,legs,color,sound,type);
  }
  
  retrieve_meta() {
    return Animal.animal_meta();
  }
}

const brownie = new Dog("Brownie",6,4,"Brownish","bow-wow","Pet",);
console.log(brownie.retrieve_meta())
const kitty = new Cat("Kitty",3,4,"Gray","mmm-meow","Pet",);
console.log(kitty.sound);