const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//Q1
let usrs = '';
let output = '';
let skilled_users = [];
let skilled_user = [['',0]];

for(let user of Object.keys(users)) {
  skilled_users.push([user,users[user]["skills"].length]);  
}

skilled_users.forEach(user => {
  if(user[1]>skilled_user[0][1]) {
    skilled_user[0] = [user[0],user[1]];
  } else if(user[1]==skilled_user[0][1]) {
    skilled_user[skilled_user.length] = [user[0],user[1]];
  }
});

if(skilled_user.length==1) {
  console.log(`${skilled_user[0][0]} is the highest skilled user.`);
} else {
  skilled_user.forEach(usr => {
    usrs += usr[0]+', ';
    return usrs;
  });

  let output = `${skilled_user.length} users have the same skill count. That would be ${usrs}`;
  console.log(output.substring(0,output.length-2)+'.');
}


//Q2
let valid_users = [];

for(let user of Object.keys(users)) {
  if(users[user]["points"]>=50) {
    valid_users.push([user,users[user]["points"]]);
  }
}

console.log(valid_users);


//Q3
let mern_stack_devs = [];

for(let user of Object.keys(users)) {
  if(users[user]["skills"].includes("MERN")) {
    valid_users.push(user);
  }
}

console.log(mern_stack_devs);


//Q4
const new_users = Object.assign({},users);
new_users.Lakshan = {};
new_users.Lakshan.email = 'lakshan@nanomail.com';
new_users.Lakshan.skills = ['HTML', 'CSS', 'JavaScript'];
new_users.Lakshan.age = 23;
new_users.Lakshan.isLoggedIn = false;
new_users.Lakshan.points = 3;


//Q5
console.log(Object.keys(users));


//Q6
console.log(Object.values(users));