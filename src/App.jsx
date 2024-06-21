import React from 'react';
import './App.css';
import Header from './components/Header';
import CallControl from './components/CallControl';
import Transcription from './components/Transcription';

function App() {
  return (
    <div className="App">
      <Header />
      <CallControl />
    </div>
  );
}

export default App;