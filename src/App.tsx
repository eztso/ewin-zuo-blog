import React from 'react';
import {Navbar} from './components/navbar'
import {CssBaseline} from '@material-ui/core'
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar/>
    </div>
  );
}

export default App;
