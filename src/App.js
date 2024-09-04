import './App.css';
import Navbar from './comps/Navbar';
import Gap from './comps/Gap';

import React, {Suspense,lazy} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const Content = lazy(()=>import('./comps/Content'));
const LogInPage = lazy(()=>import('./comps/LogInPage'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Gap/>
        <Suspense fallback = {<div>Loading data...</div>}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/LogInPage" element={<LogInPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;