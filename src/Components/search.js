import React from 'react';
import {Keyboard} from 'react-native';
import Box from './box';
import Button from './button';
import Input from './input';
import {Search, Close} from './icons/';
import theme from '../utils/theme';
import Text from './text';
function SearchBox({onChangeFocus}) {
  var [value, setValue] = React.useState('');
  const [isFocus, setFocus] = React.useState(false);
  const onCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  const onClear = () => {
    setValue('');
  };
  React.useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus, onChangeFocus]);
  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          placeholder="Türkçe Sözlük'te Ara"
          bg="white"
          borderWidth={1}
          borderColor={isFocus ? '#red' : 'trasparent'}
          height={52}
          pl={52}
          color="textDark"
          placeholderTextColor="light"
          borderRadius="normal"
          value={value}
          onChangeText={(text) => setValue(text)}
          onFocus={() => setFocus(true)}
        />
        <Button position="absolute" left={15} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={15} top={14}>
            <Close color={theme.colors.textMedium} />
          </Button>
        )}
      </Box>
      {isFocus && (
        <Button
          flex={0.22}
          onPress={onCancel}
          px={20}
          height={52}
          bg="white"
          borderRadius="normal"
          ml={5}>
          <Text>Vazgec</Text>
        </Button>
      )}
    </Box>
  );
}

export default SearchBox;
