import React from "react";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cntry_list: props.cntrys,
    }
  }

  retrieve_demo = () => {

    return (
      <div className="main_container placeholder">
        <p className="lorem_i">After long time of lock down, you may think of travelling and you do not know where to go. You may be interested to develop a random country selector that selects your holiday destination.</p>
        <p className="lorem_ii">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ad debitis, esse dolorum dolor modi ratione excepturi dolores quos recusandae facere impedit ipsam, iusto laborum itaque natus amet ex fugiat et voluptate provident? Enim, iste recusandae nostrum deserunt accusantium aut quibusdam? Aperiam, soluta in praesentium deserunt repudiandae doloribus laboriosam omnis.</p>
      </div>
    );
  }

  retrieve_country_details = (tags) => {
    if(tags!==undefined) {
      let { name, capital, languages, population, flag, currency } = tags;

      return (
        <div className="main_container general_view">
          <img src={flag} alt={"flag of "+name.split(' ')[0]} />
          <h3>{name}</h3>
          <div className="detail">
            <p className="sub_tile">Capital:&nbsp;&nbsp;<span>{capital}</span></p>
            <p className="sub_tile">Languages:&nbsp;&nbsp;<span>{languages.join(', ')}</span></p>
            <p className="sub_tile">Population:&nbsp;&nbsp;<span>{population}</span></p>
            <p className="sub_tile">Currency:&nbsp;&nbsp;<span>{currency}</span></p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    let detail = this.props.details;

    if(detail[0]===null && detail[1]===null) {
      return this.retrieve_demo();
    } else {
      return this.retrieve_country_details(this.state.cntry_list[detail[0]]);
    }
  }
}

export default Preview;