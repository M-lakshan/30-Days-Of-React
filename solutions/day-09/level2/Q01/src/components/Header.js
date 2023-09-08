import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  get_next_season = () => {
    switch(this.props.theme_change[0]) {
      case "Spring" :
        this.props.theme_change[1]("Summer");
        break;
      case "Summer" :
        this.props.theme_change[1]("Autum");
        break;
      case "Autum" :
        this.props.theme_change[1]("Winter");
        break;
      default :
        this.props.theme_change[1]("Spring");
    }
  }
// this.state.theme_val[1]
  render() {
    return (
      <header>
        <div className="section_left">
          <h1>Welcome</h1>
          <h2>Lets get started with REACT</h2>
        </div>
        <div className="section_right">
          <button id="theme_toggler" 
            onClick={() => (this.get_next_season())}
          >demo</button>
        </div>
      </header>
    );
  }
}

export default Header;