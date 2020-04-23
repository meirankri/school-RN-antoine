import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Students from './components/Students';
import Student from './components/Student';
import { SchoolProvider } from './store';


const Stack = createStackNavigator();

function App() {
  return (
    <SchoolProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Students">
          <Stack.Screen name="Students" component={Students} options={{ title: 'ouech' }} />
          <Stack.Screen name="DetailStudent" component={Student} />
        </Stack.Navigator>
      </NavigationContainer>
    </SchoolProvider>
  );
}


export default App;
