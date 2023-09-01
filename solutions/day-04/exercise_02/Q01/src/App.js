import HTML from './imgs/HTML.png';
import CSS from './imgs/CSS.png';
import Javascript from './imgs/Javascript.png';
import ReactLogo from './imgs/ReactLogo.png';
import './App.css';

const AppTitle = () => <h1>Front End Technologies</h1>

const ImgsPreview = () => {
  return (<div className="imgs">
    <img src={HTML} className="App-logo" alt="logo" />
    <img src={CSS} className="App-logo" alt="logo" />
    <img src={Javascript} className="App-logo" alt="logo" />
    <img src={ReactLogo} className="App-logo" alt="logo" />
  </div>);
}

function App() {
  return (
    <div className="App">
      <AppTitle />
      <ImgsPreview />
    </div>
  );
}

export default App;
