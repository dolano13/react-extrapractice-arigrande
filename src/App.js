import React from 'react';
import './styles.css';
import {Element} from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/Featured/index';
import VenueInfo from './components/venue info/index';
import Highlight from './components/Highlights/index';
import Pricing from './components/Pricing';
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{height:"1500px"}}>
      <Header/>
      <Element name="Countdown">
        <Featured/>
      </Element>
      <Element name="Venue">
        <VenueInfo/>
      </Element>
      <Element name="Highlights">
        <Highlight/>
      </Element>
      <Element name="Price">
        <Pricing/>
      </Element>
      <Element name="Map">
        <Location/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
