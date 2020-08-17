import React, {useRef, useEffect} from 'react';
import {StatusBar, FlatList} from 'react-native';
import {Logo} from '../Components/icons';
import Search from '../Components/search';
import Box from '../Components/box';
import Bg from '../Components/bg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {CardTitle, CardSummary, CardContainer} from '../Components/card';
import Text from '../Components/text';
import {SimpleCardContainer, SimpleCardTitle} from '../Components/simple-card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
    summary: 'Summary 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
    summary: 'Summary 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'Summary 3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item 4',
    summary: 'Summary 4',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item 5',
    summary: 'Summary 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item 6',
    summary: 'Summary 6',
  },
];

function searchView({navigation}) {
  // eslint-disable-next-line no-lone-blocks
  {
    /** Bu kisimda saat kismindaki renkler beyaz yapiliyor, siyah olmasi icin dark-content yapilmali */
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFocusEffect(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSearchFocus, setSearchFocus] = React.useState(false);

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <Box position="relative" zIndex={1} height={isSearchFocus ? 90 : 285}>
        <Bg>
          {/** Logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={150} color="white" />
          </Box>

          {/** Arama Kutusu */}

          <Box p={16} width="100%" mb={-42}>
            <Search onChangeFocus={(status) => setSearchFocus(status)} />
          </Box>
        </Bg>
      </Box>
      {/** Content */}
      <Box flex={1} pt={26} bg="softRed">
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <SimpleCardContainer>
                  <SimpleCardTitle>{item.title}</SimpleCardTitle>
                </SimpleCardContainer>
              )}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={<Text color="textLight">Son Aramalar</Text>}
            />
            {/* <SimpleCardContainer>
              <SimpleCardTitle>Kalem</SimpleCardTitle>
            </SimpleCardContainer> */}
          </Box>
        ) : (
          <Box py={40}>
            <Box>
              <Text color="textLight" px={25}>
                Bir Deyim
              </Text>
              <CardContainer onPress={() => navigation.navigate('Detay')}>
                <CardTitle>on para</CardTitle>
                <CardSummary>cok az (para).</CardSummary>
              </CardContainer>
            </Box>
            <Box mt={40}>
              <Text color="textLight" px={25}>
                Bir Deyim - Atasozu
              </Text>
              <CardContainer onPress={() => navigation.navigate('Detay')}>
                <CardTitle>siyem siyem aglamak</CardTitle>
                <CardSummary>hafif hafif, ince ince aglamak</CardSummary>
              </CardContainer>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default searchView;
