import { valid_input } from "../level2/main.js";

//Q1, Q2
let user_input = prompt("Enter a month: ");
let days = "";
switch(user_input.toLowerCase()) {
  case "february":
    days = (new Date().getFullYear()%4) ? "29" : "28";
  break;
  case "january": case "march": case "may": case "july":
  case "september": case "october": case "december":
    days = "30";
  break;
  default:
    days = "31";
}
user_input = valid_input(user_input);
console.log(`${user_input} has ${days} days.`);