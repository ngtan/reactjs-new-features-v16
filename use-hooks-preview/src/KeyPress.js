import React from 'react';

class KeyPress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyPressed: false,
    };
  }

  handleKeyDown = (e) => {
    if (e.key === this.props.targetKey) {
      this.setState({
        keyPressed: true,
      });
    }
  }

  handleKeyUp = (e) => {
    if (e.key === this.props.targetKey) {
      this.setState({
        keyPressed: false,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div>{this.state.keyPressed ? this.props.text : ''}</div>
    );
  }
}

export default KeyPress;
