import React, { Component } from 'react';

import Logo from './Logo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };
  }

  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="app">
        Seconds: {this.state.seconds}
        <Logo />
      </div>
    );
  }
}

export default App;
