import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Navbar from './layout/Navbar'
import Main from './layout/Main';

function App() {
  return (
    <div className="App">
      <Stack>
        <Router>
          <Navbar />
          <Main />
        </Router>
      </Stack>
    </div>
  );
}

export default App;
