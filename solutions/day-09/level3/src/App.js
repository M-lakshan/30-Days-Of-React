import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_fetch: false,
      data: <>wait, we are fetching your data&nbsp;&nbsp;<i className="fa-solid fa-arrows-rotate"></i></>
    }
  }

  fetch_update = (val) => this.setState({theme_set: val, data: <>completed!</>})

  retrieve_HTML = (...param) => {
    
    if(!param[0]) {
      setTimeout(() => {
        this.fetch_update(!this.state.data_fetch)
      }, 7500);
      return <h3>{this.state.data}</h3>
    }
  }
  
  render() {
    return (
      <div className={(this.state.theme_set) ? `App fetched_${this.state.theme_set}` : "App" }>
        <Header />
        <main>
          {this.retrieve_HTML(this.state.data_fetch,this.fetch_update)}
        </main>
        <Footer cr_year={new Date().getFullYear()-1} />
      </div>
    );
  }
}

export default App;