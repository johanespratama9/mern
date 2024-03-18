import React from 'react';
import Button from './elements/Button/index'; 
import 'assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <h1>halo dunia</h1>
      {/* Contoh penggunaan Button di dalam komponen App */}
      <Button type="button" className="custom-button" onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
