import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme_set: this.season_update(props.date),
      date: props.date
    }
  }

  theme_update = (val) => this.setState({theme_set: val})
  
  season_update = (date) => {
    let season = '';

    switch(date.getMonth()+1) {
      case 1 : case 2 : case 12 :
        season = "Winter";
        break;
      case 3 : case 4 : case 5 :
        season = "Spring";
        break;
      case 6 : case 7 : case 8 :
        season = "Summer";
        break;
      case 9 : case 10 : case 11 :
        season = "Autum";
        break;
      default :
        season = false;
    }

    return season;
  }
  
  render() {
    return (
      <div className={(this.state.theme_set) ? `App theme_changed ${this.state.theme_set}` : "App" }>
        <Header theme_change={[this.state.theme_set,this.theme_update]}/>
        <main>
          <h3>This is the <span>{this.state.theme_set}&nbsp;</span>season</h3>
        </main>
        <Footer cr_year={this.state.date.getFullYear()-1} />
      </div>
    );
  }
}

export default App;