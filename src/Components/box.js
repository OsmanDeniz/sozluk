import {View} from 'react-native';
import styled from 'styled-components';
import {
  color,
  compose,
  size,
  border,
  space,
  flexbox,
  borderRadius,
} from 'styled-system';

const Box = styled(View)(
  compose(color, size, space, flexbox, border, borderRadius),
);
export default Box;
