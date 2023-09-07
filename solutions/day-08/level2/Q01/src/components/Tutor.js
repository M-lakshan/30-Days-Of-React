import React from "react";
import tutor_details from "../data/tutor_details.js";

class Tutor extends React.Component {
  constructor(props) {
    super(props);
  }

  retrieve_tutor = ({ tutor_img, tutor_name, tutor_pos, program, prerequisites, scheduled_for }) => {

    return (
      <div className="main_container">
        <h2 className="container_identifier">Tutor</h2>
        <img src={tutor_img} alt={tutor_name.split(' ')[0]} />
        <h3>{tutor_name}&nbsp;
          <sup><i className="fa-solid fa-circle-check"></i></sup>
        </h3>
        <p className="detail">{tutor_pos[0]},&nbsp;<span>{tutor_pos[1]}</span></p>
        <h4>Program</h4>
        <p className="detail">{program}</p>
        <h4>Prerequisites</h4>
        <div className="requirements">
          {prerequisites.map((skill,index) => <div className="requirement" key={index}>intermediate expreience with {skill}</div>)}
        </div>
        <p><small><i className="fa-regular fa-clock"></i></small>&nbsp;&nbsp;Scheduled for&nbsp;{scheduled_for[0]+' '+scheduled_for[1]}</p>
      </div>
    );
  }

  render() {
    return this.retrieve_tutor(tutor_details[0]);
  }
}

export default Tutor;