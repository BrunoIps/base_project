import React from 'react';
import * as S from './styles';
import {Text} from '../Text/Text.style';
import NavigationService from '@mobile/utils/navigation';

interface IHeaderComponent {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
  title?: string;
  back?: boolean;
}

const HeaderComponent = ({
  leftIcon,
  leftOnPress,
  rightIcon,
  rightOnPress,
  title,
  back,
}: IHeaderComponent) => {
  return (
    <S.Container>
      {leftIcon && !back && (
        <S.LeftContainer onPress={leftOnPress}>{leftIcon}</S.LeftContainer>
      )}
      {back && (
        <S.LeftContainer onPress={() => NavigationService.goBack()}>
          <S.LeftArrow />
        </S.LeftContainer>
      )}

      <S.MiddleContainer>{title && <Text>{title}</Text>}</S.MiddleContainer>
      {rightIcon && (
        <S.RightContainer onPress={rightOnPress}>{rightIcon}</S.RightContainer>
      )}
    </S.Container>
  );
};

export default HeaderComponent;
