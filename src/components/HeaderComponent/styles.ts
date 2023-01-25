import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const LeftContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  left: 0;
`;

export const LeftArrow = styled(Feather).attrs({
  name: 'arrow-left',
  size: 26,
  color: 'gray',
})``;

export const MiddleContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const RightContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  right: 0;
`;
