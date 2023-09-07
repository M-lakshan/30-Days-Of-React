import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Tutor from './components/Tutor.js';
import Users from './components/Users.js';
import user_list from './data/user_list.js';
import tutor_details from './data/tutor_details.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme_set: false
    }
  }

  state_update = (val) => this.setState({theme_set: val})
  
  render() {
    return (
      <div className={(this.state.theme_set) ? "App theme_changed" : "App" }>
        <Header theme_change={[this.state.theme_set,this.state_update]}/>
        <main>
          <Tutor details={tutor_details} />
          <div className="divider"><p>&nbsp;</p></div>
          <div className="subs_container">
            <Users 
              users={user_list} 
              program={tutor_details[0].program}
            />
          </div>
        </main>
        <Footer cr_year={2022} />
      </div>
    );
  }
}

export default App;