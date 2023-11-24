interface IFormValues {
  email: string;
  password: string;
}

interface IFormError {
  email?: string;
  password?: string;
}

export const validate = (values: IFormValues) => {
  const errors: IFormError = {};
  // email
  if (values.email.length === 0) {
    errors.email = '이메일을 입력해 주세요.';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = '이메일 입력 형식이 올바르지 않습니다.';
  }
  // password
  if (values.password.length === 0) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (values.password.length > 15) {
    errors.password = '비밀번호는 15자 이내로 입력해주세요';
  }

  return errors;
};
