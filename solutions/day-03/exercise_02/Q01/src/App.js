import HTML from './imgs/HTML.png';
import CSS from './imgs/CSS.png';
import Javascript from './imgs/Javascript.png';
import ReactLogo from './imgs/ReactLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Front End Technologies</h1>
      <div className="imgs">
        <img src={HTML} className="App-logo" alt="logo" />
        <img src={CSS} className="App-logo" alt="logo" />
        <img src={Javascript} className="App-logo" alt="logo" />
        <img src={ReactLogo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
