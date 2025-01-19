import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <main className="w-full max-h-screen h-screen min-h-screen bg-quiz-bg bg-cover bg-center bg-no-repeat relative  overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
          <Home/>
        </main>
      </Router>
    </>
  );
};

export default App;
