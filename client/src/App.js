import React from 'react';
import './App.css';
import Main from './view/Main';
import { Router } from '@reach/router';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Router>
        <Login path={'/'} />
        <Register path={'/register'} />
        <Main path={'/main'} />
        <MovieDetails path={'/:id'} />
      </Router>
    </div>
  );
}

export default App;
