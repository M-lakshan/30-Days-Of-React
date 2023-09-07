import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme_val: props.theme_change
    }
  }

  render() {
    return (
      <header>
        <div className="section_left">
          <h1>Welcome</h1>
          <h2>Lets get started with REACT</h2>
        </div>
        <div className="section_right">
          <input type="checkbox" name="theme_toggler" id="theme_toggler" 
            onChange={(e) => this.state.theme_val[1](e.currentTarget.checked)}
          />
          <label htmlFor="theme_toggler"><span></span></label>
        </div>
      </header>
    );
  }
}

export default Header;