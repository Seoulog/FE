interface IFormValues {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

interface IFormError {
  email?: string;
  password?: string;
  passwordCheck?: string;
  nickname?: string;
}

export const validate = (values: IFormValues) => {
  const errors: IFormError = {};
  // email
  if (values.email.length === 0) {
    errors.email = '이메일을 입력해 주세요';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = '이메일 입력 형식이 올바르지 않습니다';
  }
  // password
  if (values.password.length === 0) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (values.password.length <= 8) {
    errors.password = '비밀번호는 8자 이내로 입력해주세요';
  }
  // password check
  if (values.passwordCheck.length === 0) {
    errors.passwordCheck = '비밀번호를 확인해주세요';
  } else if (values.passwordCheck !== values.password) {
    errors.passwordCheck = '입력한 비밀번호와 일치하지 않습니다';
  }
  // nickname
  if (values.nickname.length === 0) {
    errors.nickname = '닉네임을 입력해주세요';
  } else if (values.nickname.length <= 8) {
    errors.nickname = '닉네임은 8자 이내로 입력해주세요';
  }

  return errors;
};
