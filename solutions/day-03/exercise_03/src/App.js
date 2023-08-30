import './App.css';
import dp from './imgs/Lakshan.jpeg';

const user_skills = ["HTML","CSS","JavaScript","Python","JAVA","C++","C#","MySQL","MongoDB","Design","Illustration"];

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={dp} alt="Lakshan" />
        <h3>Lakshan Edirisinghe&nbsp;
          <sup><i className="fa-solid fa-circle-check"></i></sup>
        </h3>
        <p>Junior Front End Developer, <span>Sri Lanka</span></p>
        <h4>Skills</h4>
        <div className="skills">
          {user_skills.map((skill) => <div className="skill">{skill}</div>)}
        </div>
        <p><small><i className="fa-regular fa-clock"></i></small>&nbsp;&nbsp;Joined on July 2023</p>
      </div>
    </div>
  );
}

export default App;
