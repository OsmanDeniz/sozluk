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
import {Left, More} from './Components/icons';
import Button from './Components/button';

const searchStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function searchStackScreen() {
  return (
    <searchStack.Navigator>
      <searchStack.Screen
        name="Ara"
        component={searchView}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <searchStack.Screen
        name="Detay"
        component={detailView}
        options={({route, navigation}) => {
          return {
            title: (route.params && route.params.title) || '',
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'transparent',
            },
            headerLeft: () => (
              <Button
                px={20}
                height="100%"
                onPress={() => {
                  navigation.navigate('Ara');
                }}>
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                px={20}
                height="100%"
                onPress={() => {
                  navigation.navigate('Ara');
                }}>
                <More color={theme.colors.textDark} />
              </Button>
            ),
          };
        }}
      />
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
