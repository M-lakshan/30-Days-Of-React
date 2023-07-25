//Q1
const db_ids = [];
function userIdGeneratedByUser() {
  let syllabus = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'
    ,'R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','_','.'];
  const random_char = () => (Math.floor(Math.random()*((syllabus.length-1)-0)+0));
  
  let num_of_chars = prompt("Enter the charactor limit/type:");
  while(typeof(parseInt(num_of_chars))!='number') {
    num_of_chars = prompt("Enter the charactor limit/type:");
  }

  let num_of_ids = prompt("Enter the number of IDs needed:");
  while(typeof(parseInt(num_of_ids))!='number') {
    num_of_chars = prompt("Enter the number of IDs needed:");
  }
  
  while(num_of_ids>=1) {
    let username = '';
    while(!db_ids.includes(username)) {
      while(username.length<=num_of_chars) {
        let random_num = random_char();
        (random_num%2) ? username+=syllabus[random_num] : username+=syllabus[random_num].toLowerCase();
        if(username.length==num_of_chars) { if(!db_ids.includes(username)) {
          db_ids.push(username);
          break;
        } }
      }
    }
    num_of_ids--;
  }
  
  return db_ids;
}
console.log(userIdGeneratedByUser());


//Q2
function generateColors(type,num_of_colors) {
  let colors = [];
  let syllabus = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9','0'];
  const random_char = (min,max) => (Math.floor(Math.random()*((max)-min)+min));

  if(type.toLowerCase()=='hexa' || type.toLowerCase()=='rgb') {
    if(typeof(parseInt(num_of_colors))=='number') {
      while(num_of_colors>=1) {
        let new_color = '';
        let new_random_char = '';

        if(type.toLowerCase()=='hexa') {
          while(new_color.length<=5) {
            new_random_char = syllabus[random_char(0,syllabus.length-1)];
            new_color += new_random_char;
            if(new_color.length==6) { new_color = '#'+new_color; }
          }
        } else {
          let first_portion = false;
          let second_portion = false;
          let third_portion = false;

          while(!(first_portion && second_portion && third_portion)) {
            new_random_char = random_char(0,256);
            new_color += new_random_char;
            
            if(new_random_char<256) {
              if(new_color.length>=1 && new_color.length<4) { 
                new_color = new_color+',';
                first_portion = true;
              } else if(new_color.length>=5 && new_color.length<8) { 
                new_color = new_color+',';
                second_portion = true;
              } else if(new_color.length>=9 && new_color.length<13) { 
                third_portion = true;          
              }
            }
          }
          new_color = "rgb("+new_color+")";
        }
        
        if(!colors.includes(new_color)) {
          colors.push(new_color);
        }
        num_of_colors--;
      }
    } else {
      colors = "enter a valid number for required amount.";
    }
  } else {
    colors = "only HEXA & RGB variables are supported.";
  }

  return (colors.length>1) ? colors : colors[0];
}
console.log(generateColors('hexa', 1));
console.log(generateColors('hexa', 3));
console.log(generateColors('rgb', 1));
console.log(generateColors('rgb', 3));


//Q3
function shuffleArray(arr) {
  for(let i=(arr.length-1); i>0; i--) {
    let j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffleArray(['#a3e12f', '#03ed55', '#eb3d2b']));


//Q4
function factorial(num) {
  let implement = '';
  let factorial_val = num;

  for(let i=num; i>=1; i--) {
    implement+=i+'x';
    if(i!=num) { factorial_val*=i; }
  }
  return implement.substring(0,implement.length-1)+" = "+factorial_val;
}
console.log(factorial(5));


//Q5
let default_val_i;
let default_val_ii = 1;
function isEmpty(val) {
  return ((typeof(val)=='undefined') ? undefined :
    (typeof(val)=='null') ? "empty value" : `value assigned [${typeof(val)}]`);
}
console.log(isEmpty(default_val_i));
console.log(isEmpty(default_val_ii));


//Q6
function average(val) {
  let result = "provide only arrays";
  let not_a_num_val = 0;

  if(typeof(val)=='object') {
    // val.sort((a,b)=>a-b);
    val.forEach(elm => {
      if(typeof(elm)=='number') {
        result = `index[${parseInt((val.length-1)/2)}] : ${val[parseInt((val.length-1)/2)]}`;
        if(val.length==1) {
          result = 0;
        }
      } else {
        not_a_num_val++;
      }
    });
  }
  return (not_a_num_val==0) ? result : "can't get an average. not all the elements are numbers.";
}
console.log(average(['#a3e12f']));
console.log(average([1]));
console.log(average([1,1,2,4,5,6,7,8,2]));