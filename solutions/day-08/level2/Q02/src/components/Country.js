import React from 'react';

class Country extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passed_key: props.key_tag,
      cntry: props.details,
      parent_layout: props.st_layout,
      main_selection: props.st_func_cur_selection
    }
  }

  retrieve_country_details = ({ name, population, flag }) => {
    let layout_mode = (this.state.parent_layout==="grid") ? "sub_container" : "sub_container shrink";
    let identifier = this.state.passed_key;

    return (
      <div className={layout_mode} onClick={() => this.state.main_selection([identifier,name])}>
        <img src={flag} alt={"flag of "+name.split(' ')[0]} />
        <h2>{identifier+1}</h2>
        <h3>{name}</h3>
        <div className="detail">
          <p className="population">Population:&nbsp;<span>{parseFloat(population).toLocaleString()}</span></p>
        </div>
      </div>
    );
  }

  render() {
    return this.retrieve_country_details(this.state.cntry);
  }
}

export default Country;
