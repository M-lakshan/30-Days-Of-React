const dog = {}

console.log(dog);

dog.name = "Brownie";
dog.legs = "4";
dog.color = "orangish-brown";
dog.age = (new Date().getFullYear() - 2018)+" years old";
dog.bark = "woof woof";

console.log(dog.name,dog.legs,dog.color,dog.age,dog.bark);