/* eslint-disable max-len */
import React from 'react';
import {MediaProvider} from './contexts/MediaContext';
import Home from './views/Home';


const App = () => {
  return (
    <MediaProvider>
      <Home />
    </MediaProvider>
  );
};

export default App;
