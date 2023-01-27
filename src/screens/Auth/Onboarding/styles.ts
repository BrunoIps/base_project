import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {dimensionsService} from '@mobile/utils/dimensions';
import Feather from 'react-native-vector-icons/Feather';

interface IItem {
  width: number;
}

export const Container = styled.View`
  flex: 1;
`;

export const ItemContainer = styled.View`
  width: ${({width}: IItem) => width}px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${({width}: IItem) => width}px;
  height: 100%;
  resize-mode: cover;
`;

export const HorizontalList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Paginator = styled.View`
  position: absolute;
  flex-direction: row;
  height: ${dimensionsService.verticalScale(10)}px;
  bottom: ${dimensionsService.verticalScale(20)}px;
  justify-content: center;
  width: 100%;
`;

export const Dot = styled(Animated.View)`
  height: ${dimensionsService.verticalScale(10)}px;
  margin-horizontal: ${dimensionsService.horizontalScale(8)}px;
  border-radius: ${dimensionsService.verticalScale(5)}px;
  background-color: gray;
`;

export const NextContainer = styled.View`
  position: absolute;
  bottom: ${dimensionsService.verticalScale(5)}px;
  right: 10px;
  width: 100%;
  align-items: flex-end;
`;

export const NexButton = styled.TouchableOpacity.attrs({activeOpacity: 0.7})`
  justify-content: center;
  border: 2px solid white;
  align-items: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

export const NextIcon = styled(Feather).attrs({
  name: 'arrow-right',
  size: 40,
  color: 'white',
})``;

export const ExitOnboardingContainer = styled.View`
  position: absolute;
  bottom: ${dimensionsService.verticalScale(15)}px;
  right: 10px;
  align-items: flex-end;
`;

export const SkipOnboardingContainer = styled.View`
  position: absolute;
  bottom: ${dimensionsService.verticalScale(15)}px;
  left: 10px;
  align-items: flex-start;
  z-index: 10;
`;

export const Button = styled.TouchableOpacity.attrs({activeOpacity: 0.7})``;
