import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Preview from './components/Preview.js';
import Countries from './components/Countries.js';
import { countriesData } from './data/countries.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme_set: false,
      selected_country: [null,null]
    }
  }

  theme_update = (val) => this.setState({theme_set: val})
  selection_update = (val) => this.setState({selected_country: val})
  
  render() {
    return (
      <div className={(this.state.theme_set) ? "App theme_changed" : "App" }>
        <Header theme_change={[this.state.theme_set,this.theme_update]}/>
        <main>
          <Preview 
            cntrys={countriesData} 
            details={this.state.selected_country}
          />
          <div className="divider"><p>&nbsp;</p></div>
          <Countries
            cntrys={countriesData} 
            selection={this.selection_update}
          />
        </main>
        <Footer cr_year={2022} />
      </div>
    );
  }
}

export default App;