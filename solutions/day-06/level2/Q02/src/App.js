import './App.css';

const hexcode_arr = [];

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

const Tile = ({value}) => <div className="tile" style={{background: value}}>{value}</div>

const Container = ({tile_count}) => {
  let count = tile_count;

  while(tile_count>=1 && hexcode_arr.length<count) {
    let char_set = random_hexcode_generator();
    
    if(!(hexcode_arr.includes(char_set))) {
      hexcode_arr.push(char_set);
      tile_count--;
    } else {
      continue;
    }
  }

  return (
    <div className="container">
      {hexcode_arr.map((elm,index) => 
        <Tile 
          value={elm}
          key={index}
      />)}
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <h1>30 Days of React</h1>
      <p>Hexadecimal Colors</p>
    </header>
  );
}

function App() {

  return (
    <div className="App">
      <Header />
      <Container tile_count={30}/>
    </div>
  );
}

export default App;
