import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Product from './Product';
import Service from './Service';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            Header
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/service">Service</Link></li>
            </ul>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/product" component={Product} />
            <Route path="/service" component={Service} />
          </Switch>
          <footer className="App-footer">
            Footer
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
