import React, {useState} from 'react';

import * as S from './styles';
import Input from '../Input/Input';

interface Login {
  email: string;
  password: string;
}

interface IDoubleInput {
  values: Login;
  setValues: (value: Login) => void;
  securePassword: boolean;
  setSecurePassword: (secure: boolean) => void;
}

const DoubleInput = ({
  securePassword,
  setSecurePassword,
  setValues,
  values,
}: IDoubleInput) => {
  return (
    <>
      <S.Column>
        <Input
          placeholder="Digite seu email"
          value={values?.email}
          onChangeText={(value: string) => setValues({...values, email: value})}
          StartIcon={<S.UserIcon />}
        />
      </S.Column>
      <S.Column>
        <Input
          StartIcon={<S.LockIcon />}
          placeholder="Digite sua senha"
          secureTextEntry={securePassword}
          onChangeText={(value: string) =>
            setValues({...values, password: value})
          }
          EndIcon={
            <S.SecureButton onPress={() => setSecurePassword(!securePassword)}>
              {securePassword ? <S.CloseEyeIcon /> : <S.OpenEyeIcon />}
            </S.SecureButton>
          }
        />
      </S.Column>
    </>
  );
};

export default DoubleInput;
