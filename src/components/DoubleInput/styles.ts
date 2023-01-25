import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Column = styled.View`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
`;

export const UserIcon = styled(Feather).attrs({
  name: 'user',
  size: 20,
  color: 'gray',
})``;

export const LockIcon = styled(Feather).attrs({
  name: 'lock',
  size: 20,
  color: 'gray',
})``;

export const OpenEyeIcon = styled(Feather).attrs({
  name: 'eye',
  size: 20,
  color: 'gray',
})``;

export const CloseEyeIcon = styled(Feather).attrs({
  name: 'eye-off',
  size: 20,
  color: 'gray',
})``;

export const SecureButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
