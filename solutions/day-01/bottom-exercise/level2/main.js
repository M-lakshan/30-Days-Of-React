import { Animal } from "../level1/main.js";

class Bird extends Animal {
  constructor(name,age,legs,color,sound,type) {
    super(name,age,legs,color,sound,type);
    this.legs = 2;
    this.type = "Stray";
  }
  
  retrieve_meta() {
    return Animal.animal_meta();
  }
}

const chippie = new Bird("Chippie",2,1,"White","Quack-Quack","Pet",);
console.log(chippie)