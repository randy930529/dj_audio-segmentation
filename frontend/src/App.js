import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import styles from './App.module.css';
import 'bulma';
import LandigPage from './pages/LandigPage';

function App() {
  return (
    <Router>
      <header>
          <Link to="/"><h1 className={styles.AppLink}>Audio Segmentation Tool</h1></Link>
      </header>
      <main>
          <Routes>
              <Route exact path="/audio" />
              <Route path="/" element={<LandigPage />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
