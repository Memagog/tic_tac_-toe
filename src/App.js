import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import Home from './Home';
import Game from './Game';
class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Router>
          <div className="App">
          
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
              
           
            
          </div>
        </Router>
      // </Provider>
    );
  }
}
export default App;