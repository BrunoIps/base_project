import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Logo from '@mobile/assets/new_logo.svg';

import * as S from './styles';
import DoubleInput from '@mobile/components/DoubleInput/DoubleInput';
import {isValidEmail, validatePassword} from '@mobile/utils/validator';
import DefaultButton from '@mobile/components/DefaultButton';
import {dimensionsService} from '@mobile/utils/dimensions';
import {Text} from '@mobile/components/Text/Text.style';
import NavigationService from '@mobile/utils/navigation';
import HeaderComponent from '@mobile/components/HeaderComponent/HeaderComponent';

const initialValues = {
  password: '',
  email: '',
};

const Login = () => {
  const [hidePass, setHidePass] = useState(true);
  const [form, setForm] = useState(initialValues);
  const [err, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const verifyLogin = () => {
    setError(false);
    setErrorPassword(false);

    if (form && form.email.length && !isValidEmail(form.email)) {
      setError(true);
    }
    if (form && form.password.length && !validatePassword(form.password)) {
      setErrorPassword(true);
    }
  };

  return (
    <S.Container>
      <HeaderComponent back />
      <S.ContentContainer>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
        <DoubleInput
          securePassword={hidePass}
          setSecurePassword={setHidePass}
          setValues={setForm}
          values={form}
        />
        <>{err && <Text> Email inválido</Text>}</>
        <>{errorPassword && <Text> Senha inválida</Text>}</>
      </S.ContentContainer>
      <S.Button>
        <DefaultButton
          buttonText="Entrar"
          onPress={() =>
            NavigationService.navigate('Content', {screen: 'Home'})
          }
          textColor="white"
          fontSize={dimensionsService.fontScale(16)}
          lineHeight="20"
        />
      </S.Button>
    </S.Container>
  );
};

export default Login;
