import React from 'react';

import Box from '../Components/box';
import Text from '../Components/text';
import LoaderText from '../Components/loader-text';
import {CardTitle, CardSummary, CardContainer} from '../Components/card';
import {ActivityIndicator} from 'react-native';

export default function SuggestionCard({title, onPress, data, ...props}) {
  return (
    <Box {...props}>
      <Text color="textLight" px={25}>
        {title}
      </Text>
      <CardContainer onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <Box>
            <LoaderText />
            <LoaderText width={200} mt={10} />
          </Box>
        )}
      </CardContainer>
    </Box>
  );
}
