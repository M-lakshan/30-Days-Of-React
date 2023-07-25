//Q1 & Q2
// ^ used the live-server for this ^
import { countries as imported_countries } from "./countries.js";
import { webTechs as imported_web_tech, webTechs } from "./web_tech.js";

console.log(imported_countries);
console.log(imported_web_tech);


//Q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("meat");
console.log(shoppingCart);

shoppingCart.push("sugar");
console.log(shoppingCart);

for(let item of shoppingCart) {
  if(item=="Honey") {
    shoppingCart.splice(shoppingCart.indexOf("Honey"),shoppingCart.length);
    break;
  }
}
console.log(shoppingCart);

for(let item of shoppingCart) {
  if(item=="Tea") {
    shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
    break;
  }
}
console.log(shoppingCart);

if(imported_countries.includes("Ethiopia")) {
  console.log(imported_countries[imported_countries.indexOf("Ethiopia")].toUpperCase());
} else {
  imported_countries.push("Ethiopia");
}

if(imported_web_tech.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  imported_web_tech.push("Sass");
  console.log(imported_web_tech);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)