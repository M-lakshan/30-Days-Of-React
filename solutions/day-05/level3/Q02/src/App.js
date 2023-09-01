import './App.css';
import dp from './imgs/Lakshan.jpeg';
import React from 'react';

const user = [{
  user_img: dp,
  user_name: "Lakshan Edirisinghe",
  user_pos: ["Junior Front End Developer","Sri Lanka"],
  user_skills: ["HTML","CSS","JavaScript","Python","JAVA","C++","C#","MySQL","MongoDB","Design","Illustration"],
  joined: ["July","2023"]
}]; 

const User = (props) => {
  let { user_img, user_name, user_pos, user_skills, joined } = props.user_details;
  return (
    <div className="container">
      <img src={user_img} alt="Lakshan" />
      <h3>{user_name}&nbsp;
        <sup><i className="fa-solid fa-circle-check"></i></sup>
      </h3>
      <p>{user_pos[0]},&nbsp;<span>{user_pos[1]}</span></p>
      <h4>Skills</h4>
      <div className="skills">
        {user_skills.map((skill,index) => <div className="skill" key={index}>{skill}</div>)}
      </div>
      <p><small><i className="fa-regular fa-clock"></i></small>&nbsp;&nbsp;Joined on&nbsp;{joined[0]+' '+joined[1]}</p>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      {user.map((each_user,key_index) => <User user_details={each_user} key={key_index}/>)}
    </div>
  );
}

export default App;