export const isValidCellPhoneNumber = (
  phoneNumber: string | number,
): boolean => {
  const phoneRegex =
    /^\(?([0-9]{2})\)?[-. ]?([9]{1})?([0-9]{4})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phoneNumber.toString());
};

export const isValidEmail = (email: string) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const validateEmail = (email: string) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return reg.test(email);
};

export const validatePassword = (password: string) => {
  // Define as regras de validação
  const rules =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password.match(rules)) {
    return false;
  }

  const commonPasswords = [
    'password',
    '123456',
    '123456789',
    '12345678',
    '12345',
    '1234567',
    '1234567890',
    'admin',
    'letmein',
    'welcome',
    'monkey',
    'abc123',
    'qwerty',
    'admin123',
    'passw0rd',
    'sunshine',
    'master',
    'hello',
    'freedom',
    'whatever',
  ];
  if (commonPasswords.indexOf(password) !== -1) {
    return false;
  }

  return true;
};

export const rules =
  'A senha deve ter pelo menos 8 caracteres, conter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial (@$!%*?&).';
