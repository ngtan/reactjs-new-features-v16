import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrease = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <div>
          <button onClick={this.increase}>+1</button>
          <button onClick={this.decrease}>-1</button>
        </div>
      </div>
    );
  }
}

export default Counter;
