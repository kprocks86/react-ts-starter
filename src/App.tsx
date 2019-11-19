import './App.css';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Router from './router';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
