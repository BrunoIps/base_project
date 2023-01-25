import {Text} from '@mobile/components/Text/Text.style';
import React from 'react';
import * as S from './styles';
import DefaultButton from '@mobile/components/DefaultButton';
import NavigationService from '@mobile/utils/navigation';
import {dimensionsService} from '@mobile/utils/dimensions';

const Welcome = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <Text>Welcome</Text>
      </S.TextContainer>
      <Text>Seja bem-vindo ao meu app base</Text>
      <S.ButtonsContainer>
        <S.FirstButton>
          <DefaultButton
            buttonText="Entrar"
            onPress={() => NavigationService.navigate('Login')}
            textColor="white"
            lineHeight="20"
            fontSize={dimensionsService.fontScale(16)}
          />
        </S.FirstButton>
        <DefaultButton
          buttonText="Cadastrar"
          onPress={() => NavigationService.navigate('Registration')}
          textColor="white"
          lineHeight="20"
          fontSize={dimensionsService.fontScale(16)}
        />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Welcome;
