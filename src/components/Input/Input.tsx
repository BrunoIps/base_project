import React from 'react';
import {Row} from '../Row/Row';
import {Text} from '../Text/Text.style';

import * as S from './styles';

interface IInput {
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  secureTextEntry?: boolean;
}

const Input = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  EndIcon,
  StartIcon,
}: IInput) => {
  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      borderRadius="10"
      background="#cccc"
      height="100%">
      <S.Container>
        {!!StartIcon && StartIcon}

        <S.TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
        />
        {!!EndIcon && EndIcon}
      </S.Container>
    </Row>
  );
};

export default Input;
