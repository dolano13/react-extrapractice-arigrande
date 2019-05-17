import React from 'react';
import './styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/Featured/index';
function App() {
  return (
    <div className="App" style={{height:"1500px", background:"cornflowerblue"}}>
      <Header/>
      <Featured/>
    </div>
  );
}

export default App;
