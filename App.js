import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/Splash/Splashscreen';
import DashboardScreen from './screens/Dashboard/Dashboardscreen';
import WordFormationScreen from './screens/WordFormation/WordFormationScreen';
import OddOneOutScreen from './screens/OddOneOUt/OddOneOutScreen'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="WordFormation" component={WordFormationScreen} />
        <Stack.Screen name="OddOneOut" component={OddOneOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;