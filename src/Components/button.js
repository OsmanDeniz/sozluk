import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  color,
  compose,
  position,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, layout, borderRadius, position),
);
Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
};

export default Button;
