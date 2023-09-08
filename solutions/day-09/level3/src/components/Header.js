import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="section_left">
          <h1>Welcome</h1>
          <h2>Lets get started with REACT</h2>
        </div>
        <div className="section_right">
        </div>
      </header>
    );
  }
}

export default Header;