import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import AddDetailsScreen from '../screens/AddDetails'
import StatusDetailsScreen from '../screens/StatusScreen'
import ShowHomeworkDetails from '../screens/ShowHomeworkDetails'
import {store} from '../redux/store/store'

const Stack = createStackNavigator()

function Navigator() {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="AddDetailsScreen" component={AddDetailsScreen} options={{ headerTitleAlign:'center', headerTitle: "Add/Update Homework"}}/>
            <Stack.Screen name="ShowHomeworkDetails" component={ShowHomeworkDetails}  options={{ headerTitleAlign:'center', headerTitle: "Homeworks List"}}/>
            <Stack.Screen name="StatusDetailsScreen" component={StatusDetailsScreen} options={{ headerTitleAlign:'center', headerTitle: "Homework Details"}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default Navigator