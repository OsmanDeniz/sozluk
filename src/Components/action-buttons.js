import React from 'react';
import Button from './button';
import Text from './text';

function ActionButton({children, ...props}) {
  return (
    <Button
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 1,
        },
      }}
      minWidth="actionButton"
      height="actionButton"
      bg="white"
      px={8}
      borderRadius="full"
      {...props}>
      {children}
    </Button>
  );
}

export function ActionButtonTitle({children, ...props}) {
  return (
    <Text color="textLight" fontWeight="bold" mr={8} ml={8} {...props}>
      {children}
    </Text>
  );
}

export default ActionButton;
// Buradan devam et
// https://youtu.be/N_EuE5jjqHU
