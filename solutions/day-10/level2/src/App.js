import './styles/App.css';
import React from 'react';
import Header from './components/utils/Header.js';
import Main from './components/utils/Main.js';
import Footer from './components/utils/Footer.js';
import User from './data/user_data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme_set: false
    }
  }

  render() {

    return (
      <div className={(this.state.theme_set) ? "App theme_changed" : "App" }>
        <Header theme_change={[
          this.state.theme_set,
          (val) => this.setState({theme_set: val}) 
        ]}/>
        <Main user={User} />
        <Footer user={User} />
      </div>
    );
  }
}

export default App;