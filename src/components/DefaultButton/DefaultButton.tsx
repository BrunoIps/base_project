import React from 'react';

import * as S from './styles';
import {Text} from '../Text/Text.style';

interface IButton {
  onPress: () => void;
  buttonText: string;
  color?: string;
  textColor?: string;
  fontSize?: number;
  weight?: '500' | '400' | '600' | '700';
  lineHeight?: string;
}

const DefaultButton = ({
  buttonText,
  onPress,
  color,
  fontSize,
  lineHeight,
  textColor,
  weight = '500',
}: IButton) => {
  return (
    <S.Button onPress={onPress} backgroundColor={color}>
      <Text
        color={textColor}
        weight={weight}
        lineHeight={lineHeight}
        fontSize={fontSize}>
        {buttonText}
      </Text>
    </S.Button>
  );
};

export default DefaultButton;
