import React, {useEffect, useState} from 'react';

import * as S from './styles';
import {Text} from '@mobile/components/Text/Text.style';
import HeaderComponent from '@mobile/components/HeaderComponent/HeaderComponent';
import Input from '@mobile/components/Input/Input';
import DefaultButton from '@mobile/components/DefaultButton';
import NavigationService from '@mobile/utils/navigation';
import {dimensionsService} from '@mobile/utils/dimensions';
import {isValidEmail, rules, validatePassword} from '@mobile/utils/validator';

interface RegistrationForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegistrationError {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  isTheSamePassword: boolean;
}

const initialValues: RegistrationForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const [form, setForm] = useState(initialValues);
  const [firstSecurePassword, setFirstSecurePassword] = useState<boolean>(true);
  const [secondSecurePassword, setSecondSecurePassword] =
    useState<boolean>(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isTheSamePasswordError, setIsTheSamePasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const clearErrors = () => {
    setEmailError(false);
    setConfirmPasswordError(false);
    setIsTheSamePasswordError(false);
    setPasswordError(false);
    setNameError(false);
  };

  const onSubmit = () => {
    validateSubmit();
    if (
      emailError ||
      passwordError ||
      confirmPasswordError ||
      isTheSamePasswordError ||
      nameError
    ) {
      return;
    }
    NavigationService.navigate('Welcome');
  };

  const validateSubmit = () => {
    clearErrors();
    if (form.name.length === 0) {
      setNameError(true);
    }
    if (!isValidEmail(form.email) || form.email.length === 0) {
      setEmailError(true);
    }
    if (!validatePassword(form.password)) {
      setPasswordError(true);
    }
    if (!validatePassword(form.confirmPassword)) {
      setConfirmPasswordError(true);
    }
    if (form.password !== form.confirmPassword) {
      setIsTheSamePasswordError(true);
    }
  };

  return (
    <S.Container>
      <HeaderComponent back />
      <S.ContentContainer>
        <Text textAlign="center" fontSize={26} lineHeight="30">
          Crie sua conta
        </Text>
        <S.InputWrapper>
          <S.InputContainer>
            <Input
              StartIcon={<S.UserIcon />}
              placeholder="Nome"
              value={form.name}
              onChangeText={(name: string) => setForm({...form, name})}
            />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              placeholder="Email"
              StartIcon={<S.EmailIcon />}
              value={form.email}
              onChangeText={(email: string) => setForm({...form, email})}
            />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              StartIcon={<S.LockIcon />}
              placeholder="Senha"
              secureTextEntry={firstSecurePassword}
              value={form.password}
              onChangeText={(password: string) => setForm({...form, password})}
              EndIcon={
                <S.SecureButton
                  onPress={() => setFirstSecurePassword(!firstSecurePassword)}>
                  {firstSecurePassword ? <S.CloseEyeIcon /> : <S.OpenEyeIcon />}
                </S.SecureButton>
              }
            />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              value={form.confirmPassword}
              StartIcon={<S.LockIcon />}
              placeholder="Repita sua senha"
              secureTextEntry={secondSecurePassword}
              onChangeText={(confirmPassword: string) =>
                setForm({...form, confirmPassword})
              }
              EndIcon={
                <S.SecureButton
                  onPress={() =>
                    setSecondSecurePassword(!secondSecurePassword)
                  }>
                  {secondSecurePassword ? (
                    <S.CloseEyeIcon />
                  ) : (
                    <S.OpenEyeIcon />
                  )}
                </S.SecureButton>
              }
            />
          </S.InputContainer>
        </S.InputWrapper>
        {nameError && (
          <S.ErrorContainer>
            <Text>Insira seu nome</Text>
          </S.ErrorContainer>
        )}
        {emailError && (
          <S.ErrorContainer>
            <Text>Erro no email ein</Text>
          </S.ErrorContainer>
        )}
        {passwordError || confirmPasswordError ? (
          <S.ErrorContainer>
            <Text>{rules}</Text>
          </S.ErrorContainer>
        ) : null}
        {isTheSamePasswordError && (
          <S.ErrorContainer>
            <Text>Não é a mesma senha ein</Text>
          </S.ErrorContainer>
        )}
      </S.ContentContainer>
      <S.Button>
        <DefaultButton
          buttonText="Registrar"
          onPress={onSubmit}
          textColor="white"
          fontSize={dimensionsService.fontScale(16)}
          lineHeight="20"
        />
      </S.Button>
    </S.Container>
  );
};

export default Registration;
