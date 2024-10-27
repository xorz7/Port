import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <div className="main-content">
        <Work />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
