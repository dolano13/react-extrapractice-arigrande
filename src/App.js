import React from 'react';
import './styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/Featured/index';
import VenueInfo from './components/venue info/index';
import Highlight from './components/Highlights/index';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App" style={{height:"1500px"}}>
      <Header/>
      <Featured/>
      <VenueInfo/>
      <Highlight/>
      <Pricing/>
    </div>
  );
}

export default App;
