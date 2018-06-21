// Main Body Content Area

import React, { Component } from 'react';
import Card from './Card';
//import './App.css';

class Main extends Component {
  render() {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
                <div className="col-sm-3">
                    <Card />
                </div>
            </div>
        
        </div>  
    );
  }
}

export default Main;