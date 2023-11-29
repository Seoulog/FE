import { validate } from './RegisterValidation';

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

describe('RegisterValidation', () => {
  test('valid email & valid password & valid passwordCheck & valid nickname', () => {
    const input: IFormValues = {
      email: 'test1234@test.com',
      password: 'test1234!@#$',
      passwordCheck: 'test1234!@#$',
      nickname: 'test1234'
    };

    const output: IFormError = validate(input);
    console.log(output);
    expect(output).toEqual({});
  });

  test('invalid email & valid password & valid passwordCheck & valid nickname', () => {
    const input: IFormValues = {
      email: 'test1234',
      password: 'test1234!@#$',
      passwordCheck: 'test1234!@#$',
      nickname: 'test1234'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({ email: '이메일 형식이 아닙니다.' });
  });

  test('valid email & invalid password (password must be longer) & valid passwordCheck & valid nickname', () => {
    const input: IFormValues = {
      email: 'test2345@gmail.com',
      password: 'test1234',
      passwordCheck: 'test1234',
      nickname: 'test1234'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({ password: '비밀번호는 8자보다 길어야 합니다.' });
  });

  test('valid email & valid password & invalid passwordCheck (password must be match) & valid nickname', () => {
    const input: IFormValues = {
      email: 'test2345@gmail.com',
      password: 'test1234!@#$',
      passwordCheck: 'test1234',
      nickname: 'test1234'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({ passwordCheck: '입력한 비밀번호와 일치하지 않습니다.' });
  });

  test('valid email & valid password & valid passwordCheck & invalid nickname', () => {
    const input: IFormValues = {
      email: 'test2345@gmail.com',
      password: 'test1234!@#$',
      passwordCheck: 'test1234!@#$',
      nickname: 'test12345678'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({ nickname: '닉네임은 8자 이내로 입력해주세요.' });
  });

  test('invalid email & invalid password & invalid passwordCheck & invalid nickname', () => {
    const input: IFormValues = {
      email: 'test1234',
      password: 'test1234',
      passwordCheck: 'test',
      nickname: 'test12345678'
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({
      email: '이메일 형식이 아닙니다.',
      password: '비밀번호는 8자보다 길어야 합니다.',
      passwordCheck: '입력한 비밀번호와 일치하지 않습니다.',
      nickname: '닉네임은 8자 이내로 입력해주세요.'
    });
  });

  test('empty email & empty password & empty passwordCheck & empty nickname', () => {
    const input: IFormValues = {
      email: '',
      password: '',
      passwordCheck: '',
      nickname: ''
    };

    const output: IFormError = validate(input);
    expect(output).toEqual({
      email: '이메일을 입력해주세요',
      password: '비밀번호를 입력해주세요',
      passwordCheck: '비밀번호를 확인해주세요',
      nickname: '닉네임을 입력해주세요'
    });
  });
});
