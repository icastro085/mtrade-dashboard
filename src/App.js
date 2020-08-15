import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';
import CategorySearch from './CategorySearch';

export default function App() {
  return (
    <>
      <Header />
      <section className="container-main">
        <Router>
          <Sidebar />
          <main className="container">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/category"><CategorySearch /></Route>
            </Switch>
          </main>
        </Router>
      </section>
    </>
  );
}
