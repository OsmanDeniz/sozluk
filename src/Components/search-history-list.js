import React from 'react';
import {FlatList} from 'react-native';

import Text from './text';
import {SimpleCardContainer, SimpleCardTitle} from './simple-card';

export default function SearchHistoryList({data}) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <SimpleCardContainer>
          <SimpleCardTitle>{item.title}</SimpleCardTitle>
        </SimpleCardContainer>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text color="textLight">Son Aramalar</Text>}
    />
  );
}
