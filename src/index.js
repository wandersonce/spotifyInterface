import React from 'react';

import Main from './pages/Main';
import Album from './pages/Album';
import TabBar from './components/TabBar';

const App = () => {
  return (
    <React.Fragment>
      <Album />
      <TabBar />
    </React.Fragment>
  )
};

export default App;