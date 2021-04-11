import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConexionFetch from './app/components/Tarea/conexionFetch';
import Details from './app/components/Tarea/details';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConexionFetch">
        <Stack.Screen name="ConexionFetch" component={ConexionFetch} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import React, {Component} from 'react';
// import OurFlatList from './app/components/ourFlatList/OurFlatList'
// import ConexionFetch from './app/components/conexionFetch/ConexionFetch'

// export default class All extends Component {
  
//   render() {
//     return <ConexionFetch/>
//   }
// }