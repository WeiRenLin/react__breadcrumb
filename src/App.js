import React, { Component } from 'react';
import { Navbar } from './components';
import routes from './routes';
import {renderRoutes} from 'react-router-config'
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        {/* Refactor for using routes config */}
        {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;
