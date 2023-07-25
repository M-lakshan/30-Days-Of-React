export const valid_input = (input) => (input[0].toUpperCase()+input.toLowerCase().substring(1));

//Q1
let student_mark = prompt("Enter your mark: ");
let grade = '';
if(student_mark>=80 && student_mark<=100) {
  grade = 'A';
} else if(student_mark>=70 && student_mark<=89) {
  grade = 'B';
} else if(student_mark>=60 && student_mark<=69) {
  grade = 'C';
} else if(student_mark>=50 && student_mark<=59) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log(grade);

//Q2
let user_input = prompt("Enter the month of the year: ");
let season = "";
switch(user_input.toLowerCase()) {
  case "september": case "october": case "november":
    season = "Autumn";
  break;
  case "december": case "january": case "february":
    season = "Winter";
  break;
  case "march": case "april": case "may":
    season = "Spring";
  break;
  default:
    season = "Summer";
}
console.log(season);

//Q3
user_input = prompt("What is the day today? ");
let day = "";
switch(user_input.toLowerCase()) {
  case "sunday": case "saturday":
    day = "weekend";
  break;
  default:
    day = "working day";
}
user_input = valid_input(user_input);
console.log(`${user_input} is a ${day}.`);