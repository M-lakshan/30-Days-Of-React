import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  get_next_daytime = () => {
    switch(this.props.theme_change[0]) {
      case "Morning" :
        this.props.theme_change[1]("Afternoon");
        break;
      case "Afternoon" :
        this.props.theme_change[1]("Evening");
        break;
      case "Evening" :
        this.props.theme_change[1]("Night");
        break;
      default :
        this.props.theme_change[1]("Morning");
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
            onClick={() => (this.get_next_daytime())}
          >demo</button>
        </div>
      </header>
    );
  }
}

export default Header;