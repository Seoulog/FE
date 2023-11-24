import { validate } from './LoginValidation';

interface IFormValues {
  email: string;
  password: string;
}

interface IFormError {
  email?: string;
  password?: string;
}

describe('LoginValidation', () => {
  test('valid email & valid password', () => {
    const input: IFormValues = {
      email: 'test1234@test.com',
      password: 'test1234!@#$'
    };

    const output: IFormError = validate(input);
    console.log(output);
    expect(output).toEqual({});
  });

  test('valid email & invalid password (password must be longer)', () => {
    const input: IFormValues = {
      email: 'test2345@gmail.com',
      password: 'test1234'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({ password: '비밀번호는 8자보다 길어야 합니다.' });
  });

  test('invalid email & valid password', () => {
    const input: IFormValues = {
      email: 'test1234',
      password: 'test1234!@#$'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({ email: '이메일 형식이 아닙니다.' });
  });

  test('invalid email & invalid password', () => {
    const input: IFormValues = {
      email: 'test1234',
      password: 'test1234'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({
      email: '이메일 형식이 아닙니다.',
      password: '비밀번호는 8자보다 길어야 합니다.'
    });
  });

  test('empty email & empty password', () => {
    const input: IFormValues = {
      email: '',
      password: ''
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({
      email: '이메일을 입력해 주세요.',
      password: '비밀번호를 입력해주세요'
    });
  });
});
