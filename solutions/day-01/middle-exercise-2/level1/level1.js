//Q1
function fullName(f_name,l_name) {
  return f_name+' '+l_name;
}
console.log(fullName('Lakshan','Ed'));


//Q2
function sum(f_num,l_num) {
  return f_num+l_num;
}
console.log(sum(1,7));


//Q3
function circleArea(square=1,radius) {
  return Math.PI*(radius**2)*square;
}
console.log(circleArea(0.5,7));


//Q4
function convertCelciusToFarenheit(mark) {
  return ((mark*9/5)+32);
}
console.log(convertCelciusToFarenheit(2));


//Q5
function calculateBMI(weight,height) {
  let bmi = weight/(height*39.37008)**2;
  if(bmi<18.5) {
    return "Underweight";
  } else if(bmi>=18.5 && bmi<25) {
    return "Normal Weight";
  } else if(bmi>=25 && bmi<30) {
    return "Over Weight";
  } else {
    return "Obese";
  }
}
console.log(calculateBMI(74,69));


//Q6
function checkSeason(month) {
  let season = "";
  switch(month.toLowerCase()) {
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
  return season;
}
console.log(checkSeason('July'));
