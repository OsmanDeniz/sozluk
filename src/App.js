import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import searchView from './Views/search';
import favoriteView from './Views/favorite';
import historyView from './Views/history';
import Tabbar from './Components/tab-bar';
import detailView from './Views/details';
import theme from './utils/theme';

const searchStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function searchStackScreen() {
  return (
    <searchStack.Navigator headerMode="none">
      <searchStack.Screen name="Ara" component={searchView} />
      <searchStack.Screen name="Detay" component={detailView} />
    </searchStack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <Tabbar {...props} />}>
            <Tab.Screen name="History" component={historyView} />
            <Tab.Screen name="Search" component={searchStackScreen} />
            <Tab.Screen name="Favorite" component={favoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
