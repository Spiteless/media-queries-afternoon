import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Landing from './Components/Landing'
class App extends React.Component {


  render() {return (
    <div className="App">
      {/* nav 
          Logo
          Menus -- Must be expandable*/}
      <Nav></Nav>
      {/* Landing Text
          Above text
          Button*/}
      <Landing></Landing>
    </div>
  );
  }
}

export default App;
