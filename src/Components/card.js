import React from 'react';
import Text from './text';
import Box from './box';
import Button from './button';

export function CardContainer({children, ...props}) {
  return (
    <Button
      ml={20}
      mr={20}
      mt={10}
      py={16}
      px={12}
      bg="white"
      borderRadius="normal"
      {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light">
        {children}
      </Box>
    </Button>
  );
}

export function CardTitle({children}) {
  return (
    <Text fontSize={18} fontWeight="bold" ml={25}>
      {children}
    </Text>
  );
}

export function CardSummary({children}) {
  return (
    <Text fontSize={14} ml={25} mt={5} color="textMedium">
      {children}
    </Text>
  );
}
