import {dimensionsService} from '@mobile/utils/dimensions';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${dimensionsService.horizontalScale(25)}px;
`;

export const TextContainer = styled.View`
  margin-bottom: ${dimensionsService.verticalScale(20)}px;
`;

export const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 35px;
  width: 100%;
`;

export const FirstButton = styled.View`
  margin-bottom: ${dimensionsService.verticalScale(15)}px;
`;
