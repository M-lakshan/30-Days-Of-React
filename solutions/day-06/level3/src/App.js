import React from 'react';
import './App.css';
import { tenHighestPopulation } from './data/ten_most_highest_populations.js';
import { countriesData } from './data/countries.js';

// const total_world_population = 7693165599;
const total_world_population = countriesData.reduce((a,b) => a + b['population'],0);
const total_top_ten_population = tenHighestPopulation.reduce((a,b) => a + b['population'],0);

const TilePrecentage = ({ value, z_idx=2 }) => {
  let width_val = ((value/total_world_population)*100)+'%';
  
  if(z_idx===1) {
    return (<React.Fragment>
      <span 
        className="whole_world"
        style={{
          minWidth: width_val, 
          position: "absolute",
          zIndex: z_idx
        }}>
      </span>
      <span 
        style={{
          minWidth: ((total_top_ten_population/total_world_population)*100)+'%', 
          position: "relative",
          zIndex: 2
        }}>
      </span>
    </React.Fragment>);
  } else {
    return (
      <span 
        style={{
          minWidth: width_val, 
          position: "relative",
          zIndex: z_idx
        }}>
      </span>
    );
  }
}

const Tile = ({ name, pop }) => {
  return <div className="tile">
    <p className="con_name"><span>{name}</span></p>
    <p className="prec_bar">
      <TilePrecentage value={pop} z_idx={(name==="World") && 1}/>
    </p>
    <p className="population"><span>{parseFloat(pop).toLocaleString()}</span></p>
  </div>
}

const Container = ({con_list}) => {

  return (
    <div className="container">
      <Tile
        name="World" 
        pop={total_world_population} 
      />
      {con_list.map((elm,index) => {
        return <Tile
          name={elm['location']} 
          pop={elm['population']} 
          key={index}
        />
      })}
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <h1>30 Days of React</h1>
      <h3>World Population</h3>
      <p className="sub_title">Ten Most Populated Countries</p>
    </header>
  );
}

function App() {

  return (
    <div className="App">
      <Header />
      <Container con_list={tenHighestPopulation}/>
    </div>
  );
}

export default App;
