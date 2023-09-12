import React from 'react';
import Projects from '../containers/Projects.js'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exp_desg_imps : false,
      exp_app_devs : false,
      exp_web_devs : false
    }
  }

  setStateValues = (type) => {
    if(type==="design") {
      this.setState({exp_desg_imps: !this.state.exp_desg_imps});
    } else if(type[0]==='a') {
      this.setState({exp_app_devs: !this.state.exp_app_devs});
    } else {
      this.setState({exp_web_devs: !this.state.exp_web_devs});
    }
  }

  structure_projects = (type,val) => {
    if(!val.filter(e => e["tag"]===type).length>=1) {
      return [];
    } else {
      return val.filter(e => e["tag"]===type);
    }
  }

  
  render() {
    const { photo, name, profession, education, skills, projects } = this.props.user;
    const prjs_design = this.structure_projects("design",projects);
    const prjs_app_dev = this.structure_projects("app",projects);
    const prjs_web_dev = this.structure_projects("web",projects);
    const arrs = [ 
      [prjs_design,"design"],
      [prjs_app_dev,"app_dev"],
      [prjs_web_dev, "web_dev"]
    ];

    return (
      <main>
        <div id="about_container">
          <div className="img_holder">
            <img src={photo} alt={`preview of ${name}`}/>
          </div>
          <h2>Welcome,</h2>
          <h1>I'm {name}</h1>
          <h3><span>{profession[0]}</span> | <span>{profession[1]}</span> | <span>{profession[2]}</span></h3>
        </div>
        <div id="progress_container">
        </div>
        <div id="projects_container">
          {arrs.map((val,index) => {
            let passing_sts = (val[1]==="design") ? this.state.exp_desg_imps : ((val[1][0]==='a') ? this.state.exp_app_devs : this.state.exp_web_devs);

            return (val[0].length>=1) ? <Projects 
              arr={val}
              sts={passing_sts}
              key={index}
              st_func={(e) => this.setStateValues(e)}
            /> : null;
          })}
        </div>
      </main>
    );
  }
}

export default Main;