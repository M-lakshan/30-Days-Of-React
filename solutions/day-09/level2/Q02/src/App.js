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
    let daytime = '';

    if(date.getHours() > 12) {
      daytime = (date.getHours() < 6) ? "Morning" : "Afternoon";
    } else {
      daytime = (date.getHours() > 18) ? "Night" : "Evening";
    }

    return daytime;
  }
  
  render() {
    return (
      <div className={(this.state.theme_set) ? `App theme_changed ${this.state.theme_set}` : "App" }>
        <Header theme_change={[this.state.theme_set,this.theme_update]}/>
        <main>
          <h3>This is the <span>{this.state.theme_set}&nbsp;</span>time</h3>
        </main>
        <Footer cr_year={this.state.date.getFullYear()-1} />
      </div>
    );
  }
}

export default App;