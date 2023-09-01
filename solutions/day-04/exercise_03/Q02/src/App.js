import './App.css';
import dp from './imgs/Lakshan.jpeg';

const user_skills = ["HTML","CSS","JavaScript","Python","JAVA","C++","C#","MySQL","MongoDB","Design","Illustration"];

const UserDP = () => <img src={dp} alt="Lakshan" />

const UserTitle = () => {
  return (<h3>Lakshan Edirisinghe&nbsp;
    <sup><i className="fa-solid fa-circle-check"></i></sup>
  </h3>);
}

const UserSubTitle = () => <p>Junior Front End Developer, <span>Sri Lanka</span></p>

const SubTitle = () => <h4>Skills</h4>

const UserSkills = () => {
  return (<div className="skills">
    {user_skills.map((skill) => <div className="skill">{skill}</div>)}
  </div>);
}

const Footer = () => <p><small><i className="fa-regular fa-clock"></i></small>&nbsp;&nbsp;Joined on July 2023</p>

function App() {
  return (
    <div className="App">
      <div className="container">
        <UserDP />
        <UserTitle />
        <UserSubTitle />
        <SubTitle />
        <UserSkills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
