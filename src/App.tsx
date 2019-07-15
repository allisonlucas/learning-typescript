import * as React from 'react';
import './App.css';

import Hello from './components/Hello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Typescript</h1>
        </header>
        <Hello name="Charlie" enthusiasmLevel={10}/>
      </div>
    );
  }
}

export default App;
