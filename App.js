import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import AddDetails from './src/screens/AddDetails';
import StatusScreen from './src/screens/StatusScreen'
import Navigator from './src/navigators/navigators'
import DatePicker from './src/components/DatePicker'


// AppRegistry.registerComponent('Point', () => StatusScreen);
const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
      <Navigator />
      {/* </SafeAreaView> */}
    </>
  );
};

export default App;
