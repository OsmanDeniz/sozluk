import React from 'react';
import Button from './button';
import {Search, Bookmark, History} from './icons';
import Box from './box';
import theme from '../utils/theme';

function Tabbar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box
      bg="white"
      flexDirection="row"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 24,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box p={15} mt={-15} borderRadius="full" bg="white" key={label}>
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={50}
            flex={1}
            onPress={onPress}>
            {label === 'Favorite' && (
              <Bookmark
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === 'History' && (
              <History
                color={isFocused ? theme.colors.red : theme.colors.textLight}
                s
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius="full"
            />
          </Button>
        );
      })}
    </Box>
  );
}

export default Tabbar;
