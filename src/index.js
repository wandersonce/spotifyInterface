import React from 'react';
import { StatusBar } from 'react-native';

import Main from './pages/Main';
import Album from './pages/Album';
import TabBar from './components/TabBar';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Album />
      <TabBar />
    </React.Fragment>
  )
};

export default App;