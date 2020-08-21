/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, ScrollView} from 'react-native';

import Bg from '../Components/bg';
import Box from '../Components/box';
import {Logo} from '../Components/icons';
import Search from '../Components/search';
import SuggestionCard from '../Components/suggestion-card';
import SearchHistoryList from '../Components/search-history-list';

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
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );
  const [isSearchFocus, setSearchFocus] = React.useState(false);

  const [homeData, setHomeData] = React.useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  React.useEffect(() => {
    getHomeData();
  }, []);

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <Box position="relative" zIndex={1} height={isSearchFocus ? 110 : 285}>
        <Bg>
          {/** Logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={150} color="white" />
          </Box>

          {/** Arama Kutusu */}

          <Box p={16} width="100%" mb={-17}>
            <Search onChangeFocus={(status) => setSearchFocus(status)} />
          </Box>
        </Bg>
      </Box>

      {/** Content */}
      <Box flex={1} pt={26} bg="softRed">
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box py={40}>
            <Box as={ScrollView}>
              <SuggestionCard
                title="Bir Kelime"
                data={homeData?.kelime[0]}
                onPress={() =>
                  navigation.navigate('Detay', {
                    title: homeData?.kelime[0].madde,
                  })
                }
              />

              <SuggestionCard
                mt={40}
                data={homeData?.atasoz[0]}
                title="Bir Deyim - Atasozu"
                onPress={() =>
                  navigation.navigate('Detay', {
                    title: homeData?.atasoz[0].madde,
                  })
                }
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default searchView;
