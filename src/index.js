import React from 'react';
import { StatusBar } from 'react-native';

import Main from './pages/Main';
import Album from './pages/Album';
import TabBar from './components/TabBar';


//!! TO SEE THE ALBUM SCREEM JUST CHANGE THE MAIN COMPONENT FOR THE ALBUM.

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Main />
      <TabBar />
    </React.Fragment>
  )
};

export default App;