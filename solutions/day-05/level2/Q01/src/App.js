import HTML from './imgs/HTML.png';
import CSS from './imgs/CSS.png';
import Javascript from './imgs/Javascript.png';
import ReactLogo from './imgs/ReactLogo.png';
import './App.css';

const imgs_arr = [ HTML, CSS, Javascript, ReactLogo ];

const AppTitle = () => <h1>Front End Technologies</h1>

const ImgPreview = ({s_img}) => <img src={s_img} className="App-logo" alt="logo" />

const ImgsPreview = () => {
  return (<div className="imgs">
    {imgs_arr.array.map((elm,index) => <ImgPreview s_img={elm} key={index} />)}
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
