import * as React from 'react';
import {Text, StatusBar, Platform} from 'react-native';
import Box from '../Components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

function historyView() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFocusEffect(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Arama_Gecmisi</Text>
    </Box>
  );
}

export default historyView;
