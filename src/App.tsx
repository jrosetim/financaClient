import React from 'react';
import Routes from './routes'
import './app.css';
import {AuthProvider} from '../src/components/context/authContext'

function App() { 
  return (
    <AuthProvider>
      <div className="App">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
