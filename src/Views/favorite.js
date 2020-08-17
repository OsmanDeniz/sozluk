import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Box from '../Components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

function favoriteView() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFocusEffect(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Favoriler!</Text>
    </Box>
  );
}
export default favoriteView;
