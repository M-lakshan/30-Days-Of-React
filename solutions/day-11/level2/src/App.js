import './styles/App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: ["50%","50%",0]
    }
  }

  updateState = (val) => this.setState({position: val});

  changeElmPosition = (e) => {
    let counter = (this.state.position[2]>50) ? 0 : this.state.position[2];
    const random_pos = (min,max,counter) => parseInt((Math.random() * (max - min) + min)/((counter%2===0) ? 10 : 17));
    const pos_validate = (type) => {
      let return_val = 100;

      if(type==="top") {
        return_val = random_pos(e.pageY,document.body.clientHeight);
      } else {
        return_val = random_pos(e.pageX,document.body.clientWidth);
      }

      return return_val+'%';
    }

    let random_top = pos_validate("top");
    let random_left = pos_validate("left");

    document.querySelector("h2").style.top = random_top;
    document.querySelector("h2").style.left = random_left;

    this.updateState([random_top,random_left,counter]);
    console.log(random_top,random_left)
  }

  render() {

    return (
      <div className="App">
        <h2 onMouseOver={(evt) => this.changeElmPosition(evt)}>30 Days of React</h2>
      </div>
    );
  }
}

export default App;