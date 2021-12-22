import React from 'react';
import './App.css';
import Main from './view/Main';
import { Router } from '@reach/router';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';
import EditProfile from './components/EditProfile';
import AllLists from './components/AllLists';

function App() {
  return (
    <div>
      <Router>
        <Login path={'/'} />
        <Register path={'/register'} />
        <Main path={'/main'} />
        <MovieDetails path={'/movies/:id'} />
        <EditProfile path={`/edit/${localStorage.userId}`}/>
        <AllLists path={`/lists/${localStorage.userId}`} />
      </Router>
    </div>
  );
}

export default App;
