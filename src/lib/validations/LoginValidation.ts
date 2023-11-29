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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '이메일 형식이 아닙니다.';
  }
  // password
  if (values.password.length === 0) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (values.password.length <= 8) {
    errors.password = '비밀번호는 8자보다 길어야 합니다.';
  }

  return errors;
};
