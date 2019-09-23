import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comps/Header'
import LoginForm from './comps/LoginForm'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from './pages/IndexPage'

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const handleLoginSubmit = (value) => {
    console.log('handleLoginSubmit clicked')
    // fetch('/user/login', data: {
    //   username: value
    // }).then(response => {
    //   if (response.passed === true) {
    //     setLoggedIn(true)
    //   }
    // })

    if (value === 'mario') {
      
      setLoggedIn(true)
    }
  }
  if (!loggedIn) {
    return <LoginForm onLoginSubmit={handleLoginSubmit}/>
  }
  return (
    <div className="App">
      <Header></Header>
      <AppRouter />
      
    </div>
  );
}


export default App;
