import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
//import Main from './components/Main';
//import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Featured />
          
        </div>
    );
  }
}

export default App;