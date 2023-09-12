import React from 'react';
import Project from '../containers/Project.js';

const Projects = ({ arr, sts, st_func }) => {

  return (
    <React.Fragment>
      <input 
        type="checkbox"
        name={`${arr[1]}_bar_trigger`} 
        id={`${arr[1]}_bar_trigger`} 
        value={sts}
        onChange={() => st_func(arr[1])}
      />
      <label 
        htmlFor={`${arr[1]}_bar_trigger`} 
        className={(sts) ? `${arr[1]}_bar expanded` : `${arr[1]}_bar`} 
      >
        <span>{(arr[1]==="design") ? "Design" : ((arr[1][0]==='a') ? "Application" : "Web")}</span>
        <span className="whitespace">&nbsp;</span>
        <span>{(arr[1]==="design") ? "Implements" : "Developments"}</span>
      </label>
      <div className={(sts) ? `${arr[1]}_prjs expanded` : `${arr[1]}_prjs`}>
        <div className="sub_container">
          {arr[0].map((prj,index) => <Project project={prj} key={index} />)}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;