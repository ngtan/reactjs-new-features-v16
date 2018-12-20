import React from 'react';

import Counter from './Counter';
import DocumentTitle from './DocumentTitle';
import KeyPress from './KeyPress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello App-header
      </header>
      <Counter />
      <DocumentTitle />
      <KeyPress targetKey="h" text="😊" />
      <KeyPress targetKey="s" text="😢" />
      <KeyPress targetKey="r" text="🤖" />
      <KeyPress targetKey="f" text="🦊" />
      <footer className="App-footer">
        Hello App-footer
      </footer>
    </div>
  );
}

export default App;
