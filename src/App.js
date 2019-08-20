import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './Home/home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pong/">pong</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
      </div>
    </Router>
    </div>
  );
}

export default App;
