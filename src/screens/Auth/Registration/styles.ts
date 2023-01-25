import {dimensionsService} from '@mobile/utils/dimensions';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  padding-horizontal: ${dimensionsService.horizontalScale(20)}px;
  flex: 1;
  align-items: center;
`;

export const ContentContainer = styled.View`
  margin-top: ${dimensionsService.verticalScale(10)}px;
`;

export const InputWrapper = styled.View`
  margin-top: ${dimensionsService.verticalScale(30)}px;
`;

export const InputContainer = styled.View`
  height: ${dimensionsService.verticalScale(50)}px;
  margin-bottom: ${dimensionsService.verticalScale(20)}px;
`;

export const UserIcon = styled(Feather).attrs({
  name: 'user',
  size: 20,
  color: 'gray',
})``;

export const EmailIcon = styled(MaterialIcons).attrs({
  name: 'email',
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

export const Button = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const ErrorContainer = styled.View`
  margin-vertical: ${dimensionsService.verticalScale(5)}px;
`;
