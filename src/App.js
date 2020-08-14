import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <>
      <Header />
      <section className="container-main">
        <Router>
          <Sidebar />
          <main className="container">
            <Switch>
              <Route path="/"><Home /></Route>
            </Switch>
          </main>
        </Router>
      </section>
    </>
  );
}
