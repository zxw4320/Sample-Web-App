import React, { Component } from 'react';
import logo from './Chicago-City-Skyline.jpg';
import './App.css';
import Popup from './Popup.js';


class App extends Component {

  constructor(){
    super();
    this.state = {showPopup: false};
  }

  togglePopup(){
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            {(this.state.showPopup) ?
                <Popup closePopup={this.togglePopup.bind(this)}/>
                :
                <span>
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>Register for the Chicago conference!</p>
                  <button onClick={this.togglePopup.bind(this)}>Register</button>
                </span>
            }
          </header>
        </div>
    );
  }
}

export default App;
