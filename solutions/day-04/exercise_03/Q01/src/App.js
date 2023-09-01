import './App.css';

const random_hexcode_generator = () => {
  let hex_alphabet = ['A','B','C','D','E','F'];
  let hexcode = [];
  let hex_index = (min,max) => parseInt(Math.random() * (max - min) + min);

  while(hexcode.length<=5) {
    if(parseInt((Math.random()*10))%2===0) {
      hexcode.push(hex_index(0,9))
    } else {
      hexcode.push(hex_alphabet[hex_index(0,5)])
    }
  }

  return '#'+hexcode.join('');
}

const ColorTile = () => {
  let tile_color = random_hexcode_generator();

  return (<div className="tile" style={{background: tile_color}}>
    {tile_color}
  </div>);
}

const Container = () => {

  return (
    <div className="container">
      <ColorTile />
      <ColorTile />
      <ColorTile />
      <ColorTile />
      <ColorTile />
    </div>
  );
}

const Footer = () => <p>reload the page to generate colors</p>

function App() {
  return (
    <div className="App">
      <Container />
      <Footer />
    </div>
  );
}

export default App;
