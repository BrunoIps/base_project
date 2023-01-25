import {dimensionsService} from '@mobile/utils/dimensions';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding-horizontal: 10px;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  margin-left: ${dimensionsService.horizontalScale(20)}px;
  margin-top: ${dimensionsService.verticalScale(10)}px;
`;
