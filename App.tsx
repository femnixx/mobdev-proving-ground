/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigatorProps } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { List } from './src/screens/ListScreen';
import { Profile } from './src/screens/ProfileScreen';
import PostDetail from './src/screens/PostDetail';
import UserProfile from './src/screens/UserProfile';

export type RootStackParamList = { 
        List: undefined;
        Profile: undefined;
        PostDetail: { id: number };
        UserProfile: { userId: number };
    }

const Stack = createNativeStackNavigator();
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="PostDetail" component={PostDetail} />
          <Stack.Screen name='UserProfile' component={UserProfile}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
