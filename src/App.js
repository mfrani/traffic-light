import React, { Component } from 'react';
import Lights from './components/Lights';




class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h1>Traffic Light App</h1>
          <Lights/>
         
      </div>
    );
  }
}

export default App;
