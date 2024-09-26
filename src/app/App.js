import React from 'react';
import { Counter } from '../features/counter/Counter';
import Posts from '../features/posts/Posts';
import Subreddits from '../features/subreddits/Subreddits';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Posts />
        <Subreddits />
      </header>
    </div>
  );
}

export default App;
