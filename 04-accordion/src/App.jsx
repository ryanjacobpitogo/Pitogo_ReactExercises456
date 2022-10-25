import React from 'react';
import { useState } from 'react';
import './App.css';
import data from './data';
import Questions from './Questions';

function App() {
  const [info, setInfo] = useState(data);

  return (
    <main className="App">
      <Questions info = {info}/>
    </main>
  )
}

export default App;
