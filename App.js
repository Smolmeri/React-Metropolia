/* eslint-disable max-len */
import React from 'react';
import {MediaProvider} from './contexts/MediaContext';
import Nav from './navigators/Navigator';


const App = () => {
  return (
    <MediaProvider>
      <Nav />
    </MediaProvider>
  );
};

export default App;
