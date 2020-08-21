import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import Box from '../Components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import Text from '../Components/text';
import ActionButton, {ActionButtonTitle} from '../Components/action-buttons';
import {
  DetailSummaryItemContainer,
  DetailSummaryItemTitle,
  DetailSummaryItemContent,
} from '../Components/detail-summary-item';
import {Sound, Hand, Bookmark} from '../Components/icons';
import theme from '../utils/theme';
import LoaderText from '../Components/loader-text';
function detailView({route}) {
  //const keyword = route.params?.title;
  const keyword = 'ocak';
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = React.useState(null);

  const getData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    //const response = await fetch(`https://sozluk.gov.tr/gts?ara=reddihakim`);
    const data = await response.json();
    setData(data[0]);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    getData();
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFocusEffect(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>

          <Text color="textLight" mt={10} mb={10}>
            {data?.telaffuz && data?.telaffuz} {data?.lisan}
          </Text>
        </Box>
        <Box flexDirection="row">
          <ActionButton disabled={!data}>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12} disabled={!data}>
            <Bookmark width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto" disabled={!data}>
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Turk Isaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map((item) => (
                <DetailSummaryItemContainer border>
                  <DetailSummaryItemTitle>{item.anlam}</DetailSummaryItemTitle>

                  {item.orneklerListe &&
                    item.orneklerListe.map((ornekItem) => (
                      <DetailSummaryItemContent key={ornekItem.ornek_id}>
                        {ornekItem.ornek}
                      </DetailSummaryItemContent>
                    ))}
                </DetailSummaryItemContainer>
              ))
            : [1, 2, 3].map((index, key = index) => (
                <DetailSummaryItemContainer border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItemContainer>
              ))}
        </Box>
      </Box>
    </Box>
  );
}

export default detailView;
