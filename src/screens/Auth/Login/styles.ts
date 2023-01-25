import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {dimensionsService} from '@mobile/utils/dimensions';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-horizontal: ${dimensionsService.horizontalScale(25)}px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  top: 220px;
`;

export const LogoContainer = styled.View`
  width: 100px;
  height: 100px;
`;

export const Logo = styled.Image`
  height: 100%;
  width: 100%;
  resize: contain;
`;

export const Button = styled.View`
  position: absolute;
  bottom: 35px;
  width: 100%;
`;
