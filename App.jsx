import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Students from './components/Students';
import Student from './components/Student';
// le school provider c'est l'api context qui me provide 
import { SchoolProvider } from './store';


const Stack = createStackNavigator();

const Nav = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Students">
      <Stack.Screen name="Students" component={Students} />
      <Stack.Screen name="DetailStudent" component={Student} />
    </Stack.Navigator>
  </NavigationContainer>
);


function App() {
  return (
    <SchoolProvider>
      <Nav />
    </SchoolProvider>
  );
}


export default App;
