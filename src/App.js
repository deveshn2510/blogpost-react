import React from 'react';
import './App.css';
import Headers from './components/header/header'
import AddingPost from './components/addingPost/addingPost';

function App() {
  return (
    <div className="App">
      <Headers/>
      <AddingPost/>
    </div>
  );
}

export default App;
