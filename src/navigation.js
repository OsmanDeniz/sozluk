import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Tabbar from './Components/tab-bar';
import {Left, More} from './Components/icons';
import Button from './Components/button';

import searchView from './Views/search';
import favoriteView from './Views/favorite';
import historyView from './Views/history';
import detailView from './Views/details';

import theme from './utils/theme';

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
            // route? buradaki ? isareti babel eklentisi sayesinde varsa anlami katiyor.
            title: route?.params.title,
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

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBar={(props) => <Tabbar {...props} />}>
        <Tab.Screen name="History" component={historyView} />
        <Tab.Screen name="Search" component={searchStackScreen} />
        <Tab.Screen name="Favorite" component={favoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
