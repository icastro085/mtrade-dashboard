import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import CategorySearch from './pages/CategorySearch';

export default function App() {
  return (
    <>
      <Header />
      <section className="container-main">
        <Router>
          <Sidebar />
          <main className="container">
            <Switch>
              <Route path="/category"><CategorySearch /></Route>
              <Route exact path="/"><Home /></Route>
            </Switch>
          </main>
        </Router>
      </section>
    </>
  );
}
