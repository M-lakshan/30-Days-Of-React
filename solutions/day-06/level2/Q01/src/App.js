import './App.css';

const bg_class_validator = (num) => {
  const prime_check = (e) => {
    for(let i=2, s=Math.sqrt(e); i<=s; i++) {
      if(e%i===0) return false;
    }
    return e>1;
  }

  return (prime_check(num)) ? "prm_val" : ((num%2===0) ? "evn_val" : "odd_val");
}

const Tile = ({ code, value }) => <div className={"tile "+code}>{value}</div>

const Container = ({tile_count}) => {
  let count = 1;
  let arr = [];

  while(count<=tile_count) {
    arr.push({val: count, cls: bg_class_validator(count)});
    count++;
  }

  return (
    <div className="container">
      {arr.map((elm,index) => 
        <Tile 
          code={elm['cls']}
          value={elm['val']}
          key={index}
      />)}
    </div>
  );
}

const Header = ({cur_date}) => {
  return (
    <header>
      <h1>30 Days of React</h1>
      <p>Number Generator</p>
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
