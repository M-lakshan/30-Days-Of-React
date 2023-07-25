// ^ used the live-server for this ^
import { countries as imported_countries } from "../level2/countries.js";
import { webTechs as imported_web_tech, webTechs } from "../level2/web_tech.js";

//Q1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a,b)=>a-b);

let min_age = ages[0];
let max_age = ages[ages.length-1];
console.log(`min age: ${min_age} & max age: ${max_age}`);
/*
let avg_ages = [];
ages.forEach(age => { if(!avg_ages.includes(age)) { avg_ages.push(age); } })
console.log(avg_ages[parseInt(avg_ages.length/2)]);
*/
let avg_age = 0;
let mid_val = ages.length/2;
if(mid_val%2==0) {
  avg_age = (ages[mid_val-1]+ages[mid_val])/2;
} else {
  avg_age = ages[parseInt(mid_val)];
}
console.log(avg_age);

console.log(Math.abs(min_age-max_age));
console.log(Math.abs((avg_age-min_age)-(max_age-avg_age)));

console.log(imported_countries.slice(0,10));


//Q2
if(imported_countries.length%2==0) {
  console.log(imported_countries[(imported_countries.length/2)-1],imported_countries[(imported_countries.length/2)]);
} else {
  console.log(imported_countries[parseInt((imported_countries.length)/2)]);
}


//Q3
if(imported_countries.length%2==0) {
  console.log("1",imported_countries.slice(0,(imported_countries.length/2)));
  console.log("2",imported_countries.slice((imported_countries.length/2),imported_countries.length));
} else {
  console.log(imported_countries.slice(0,parseInt(imported_countries.length/2)+1));
  console.log(imported_countries.slice(parseInt(imported_countries.length/2)+1,imported_countries.length));
}