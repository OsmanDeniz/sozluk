import * as React from 'react';
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
import {SoundSolid, Hand, Bookmark} from '../Components/icons';
import theme from '../utils/theme';
function detailView() {
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
            Arama_Gecmisi
          </Text>
          <Text color="textLight" mt={10} mb={10}>
            Arapca Kalem
          </Text>
        </Box>
        <Box flexDirection="row">
          <ActionButton>
            <SoundSolid width={24} height={24} color="red" />
          </ActionButton>
          <ActionButton ml={12}>
            <Bookmark width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto">
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Turk Isaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          <DetailSummaryItemContainer>
            <DetailSummaryItemTitle>Baslik Bilgisi</DetailSummaryItemTitle>
            <DetailSummaryItemContent>Icerik</DetailSummaryItemContent>
          </DetailSummaryItemContainer>
        </Box>

        <Box>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>Baslik Bilgisi</DetailSummaryItemTitle>
            <DetailSummaryItemContent>Icerik</DetailSummaryItemContent>
          </DetailSummaryItemContainer>
        </Box>
        <Box>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>Baslik Bilgisi</DetailSummaryItemTitle>
            <DetailSummaryItemContent>Icerik</DetailSummaryItemContent>
          </DetailSummaryItemContainer>
        </Box>
        <Box>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>Baslik Bilgisi</DetailSummaryItemTitle>
            <DetailSummaryItemContent>Icerik</DetailSummaryItemContent>
          </DetailSummaryItemContainer>
        </Box>

        <Box>
          <DetailSummaryItemContainer border>
            <DetailSummaryItemTitle>Baslik Bilgisi</DetailSummaryItemTitle>
            <DetailSummaryItemContent>Icerik</DetailSummaryItemContent>
          </DetailSummaryItemContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default detailView;
