//Q1
let user_age = prompt("Enter your age :");
console.log(`You are ${(user_age>=18) ? "old enough" : "left with 3 years"} to drive`);

//Q2
let my_age = 23;
user_age = prompt("Enter your age :");
if(user_age==my_age) {
  console.log("You are in the same age group as mine.");
} else if(user_age>23) {
  console.log(`You are ${user_age-my_age} years older than me.`);
} else {
  console.log(`I am ${my_age-user_age} years older than you.`);
}

//Q3
let a = 4;
let b = 3;
console.log((a>b) ? `${a} is greater than ${b}` : `${b} is greater than ${a}`);

//Q4
let user_input = prompt("Enter a number: ");
console.log(`${user_input} is an ${(user_input%2==0) ? "even" : "odd"} number`);