import React from 'react';

// class DocumentTitle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times.`;
//   }

//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times.`;
//   }

//   increase = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }

//   decrease = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <p>Counter: {this.state.count}</p>
//         <div>
//           <button onClick={this.increase}>+1</button>
//           <button onClick={this.decrease}>-1</button>
//         </div>
//       </div>
//     );
//   }
// }

function DocumentTitle() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <p>Counter: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
}

export default DocumentTitle;
