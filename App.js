import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import AddDetails from './src/screens/AddDetails';

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
      <AddDetails />
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
