//Q1
function solveQuadratic(a=0,b=0,c=0) {
  let x_plus = parseInt((-b + (Math.sqrt((b**2)-4*a*c)))/2*a);
  let x_minus = parseInt((-b - (Math.sqrt((b**2)-4*a*c)))/2*a);

  return ((x_plus==x_minus && x_plus!=0) ? '{'+x_plus+'}' : 
    ((x_plus!=x_minus) ? '{'+x_plus+', '+x_minus+'}' : '{'+0+'}'));
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}


//Q2
function printArray(arr) {
  if(typeof(arr)!='object') {
    console.log("Input only arrays.");
  } else {
    arr.forEach(elm1 => {
      if(typeof(elm1)!='object') {
        console.log('\t'+elm1);
      } else {
        elm1.forEach(elm2 => {
          console.log('\t\t'+elm2);
        });
      }
    });
  }
}
console.log(printArray([1,2,3,[3,5,6,7,5],32,3,23]))


//Q3
function showDate() {
  let date = new Date();
  return date.getDate()+'/'+date.getMonth()+'/'+date.getYear()+' '+date.getHours()+'/'+date.getMinutes();
}
console.log(showDate());


//Q4
function swapValues(a,b) {
  let arr = [a,b];
  [arr[0],arr[1]]=[arr[1],arr[0]];
  return (arr);
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));


//Q5
function reverseArray(arr) {
  let result_arr = [];
  arr.forEach(elm => result_arr.unshift(elm));
  return result_arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));


//Q6
function capitalizeArray(arr) {
  let result_arr = [];
  arr.forEach(elm => 
    (typeof(elm)=='string') ? 
      result_arr.push(elm.toUpperCase())
    : result_arr.push(elm));
  return result_arr.reverse();
}
console.log(capitalizeArray(["qwe","dsc"]));
console.log(capitalizeArray(["csA", "scsB", "ccC"]));


//Q7
function addItem(...arr) {
  let result_arr = [];
  arr.forEach(elm => result_arr.push(elm));
  return result_arr;
}
console.log(addItem("qwe","dsc"));


//Q8
function removeItem(index,arr) {
  if(index<0 || index>arr.length-1 || typeof(index)!="number") {
    return "invalid index";
  } else {
    if(arr.length!=1) {
      if(index==0) {
        return arr.slice(1,arr.length);
      } else {
        return arr.slice(0,index-1).concat(arr.splice(index,index+1));
      }
    } else {
      return arr.splice();
    }
  }
}
console.log(removeItem(4,["qwe","xsw","avd","qwe","dsc"]));


//Q9
function evenAndOdds(num) {
  let number_of_odds = 0;
  let number_of_evens = 0;
  while(num>=0) {
    if(num==0) {
      break;
    } else {
      if(num%2) {
        number_of_evens++;
      } else {
        number_of_odds++
      }
    }
    num--;
  }
  return (`\nThe number of odds are ${number_of_odds}\n
  The number of odds are ${number_of_odds}`);
}
console.log(evenAndOdds(100));


//Q10
function sum(...args) {
  let summation = 0;
  args.forEach(arg => summation+=arg);
  return summation
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));


//Q11
const db_ids = [];
function userIdGenerator() {
  let syllabus = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'
    ,'R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','_','.'];
  let username = '';
  const random_char = () => (Math.floor(Math.random()*((syllabus.length-1)-0)+0));
  
  while(!db_ids.includes(username)) {
    while(username.length<=7) {
      let random_num = random_char();
      (random_num%2) ? username+=syllabus[random_num] : username+=syllabus[random_num].toLowerCase();
      if(username.length==7) { if(!db_ids.includes(username)) {
        db_ids.push(username);
        break;
      } }
    }
  }
  
  return db_ids[db_ids.length-1];
}
console.log(userIdGenerator());
