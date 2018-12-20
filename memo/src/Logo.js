import React from 'react';

// function Logo() {
//   console.log('Logo component');
//   return (
//     <div>This is a logo</div>
//   );
// }

class Logo extends React.Component {
  componentDidMount() {
    console.log('Logo componentDidMount');
  }

  render() {
    console.log('Logo component');
    return (
      <div>This is a logo</div>
    );
  }
}

export default React.memo(Logo);
