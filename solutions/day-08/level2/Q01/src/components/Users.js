import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_list: props.users,
      current_program: props.program,
    }
  }

  retrieve_users = (e) => {
    let { user_img, user_name, user_pos, user_skills, associated_to, joined } = e[0];

    if(associated_to===this.state.current_program) {
      return (
        <div className="sub_container" key={e[1]}>
          <h2 className="container_identifier">Student</h2>
          <img src={user_img} alt={user_name.split(' ')[0]} />
          <h3>{user_name}&nbsp;
            <sup><i className="fa-solid fa-circle-check"></i></sup>
          </h3>
          <p className="detail">{user_pos[0]},&nbsp;<span>{user_pos[1]}</span></p>
          <h4>Skills</h4>
          <div className="skills">
            {user_skills.map((skill,index) => <div className="skill" key={index}>{skill}</div>)}
          </div>
          <p><small><i className="fa-regular fa-clock"></i></small>&nbsp;&nbsp;Joined on&nbsp;{joined[0]+' '+joined[1]}</p>
        </div>
      );
    }
  }

  render() {
    return (
      this.state.user_list.map((elm,index) => {
        return this.retrieve_users([elm,(index+1),this.theme]);
      })
    );
  }
}

export default Users;
