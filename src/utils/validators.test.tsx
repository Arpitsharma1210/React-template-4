import moment from 'moment';
import {
  required,
  requiredIf,
  emailValidator,
  domainValidator,
  confirmPassword,
  validateDate,
  validateFutureDate,
  validatePastDate,
  numberValidator,
  passwordValidator,
  decimalValidator,
} from './validators';


// Mock moment to control the current time
jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2023-01-01T00:00:00Z');
});

describe('validators', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('required', () => {
    it('should return an error message if value is empty', () => {
      const validator = required('Field is required');
      expect(validator('')).toBe('Field is required');
    });

    it('should return undefined if value is not empty', () => {
      const validator = required('Field is required');
      expect(validator('Not empty')).toBeUndefined();
    });
  });

  describe('requiredIf', () => {
    it('should return an error message if condition is met and value is empty', () => {
      const validator = requiredIf('Field is required', () => true);
      expect(validator('', {})).toBe('Field is required');
    });

    it('should return undefined if condition is not met', () => {
      const validator = requiredIf('Field is required', () => false);
      expect(validator('', {})).toBeUndefined();
    });
  });

  describe('emailValidator', () => {
    it('should return an error message if value is not a valid email', () => {
      expect(emailValidator('notAnEmail')).toBeDefined();
    });

    it('should return undefined if value is a valid email', () => {
      expect(emailValidator('test@example.com')).toBeUndefined();
    });
  });

  jest.mock('../messages/messages.json', () => ({
    en: {
      company: {
        domain: 'memorres.com',
      },
      general: {
        errors: {
            invalidDate: "Invalid date",
          invalidDomain: 'Please enter the valid company domain',
          dateMustBeInTheFuture: 'Date must be in the future',
        dateMustBeInThePast: 'Date must be in the past',
        },
      },
    },
  }));
  
  describe('domainValidator', () => {
    it('should return undefined if value includes the company domain', () => {
      expect(domainValidator('test@memorres.com')).toBeUndefined();
    });
  
    it('should return an error message if value does not include the company domain', () => {
      expect(domainValidator('test@notMemorres.com')).toBe('Please enter the valid company domain');
    });
  });

  describe('confirmPassword', () => {
    it('should return an error message if passwords do not match', () => {
      const validator = confirmPassword('Passwords do not match');
      expect(validator('password1', { password: { value: 'password2' } })).toBe('Passwords do not match');
    });

    it('should return undefined if passwords match', () => {
      const validator = confirmPassword('Passwords do not match');
      expect(validator('password1', { password: { value: 'password1' } })).toBeUndefined();
    });
  });

  jest.mock('moment', () => {
    return () => jest.requireActual('moment')('2023-01-01T00:00:00Z');
  });
  
  const mockedMessages = {
    en: {
      general: {
        errors: {
          invalidDate: "Invalid date",
          dateMustBeInTheFuture: 'Date must be in the future',
          dateMustBeInThePast: 'Date must be in the past',
        },
      },
    },
  };
  
  const { invalidDate, dateMustBeInTheFuture, dateMustBeInThePast } = mockedMessages.en.general.errors;
  
  describe('validateDate', () => {
    it('should return an error message if value is not a valid date', () => {
      expect(validateDate(invalidDate)('notADate')).toBeUndefined();
    });
  
    it('should return undefined if value is a valid date', () => {
      expect(validateDate(invalidDate)('2023-01-01')).toBeUndefined();
    });
  });
  
  describe('validateFutureDate', () => {
    it('should return an error message if the date is not valid', () => {
      expect(validateFutureDate(invalidDate)('notADate')).toBeUndefined();
    });
  
    it('should return an error message if the date is in the past', () => {
      expect(validateFutureDate(dateMustBeInTheFuture)('2022-12-31T00:00:00Z')).toBeUndefined();
    });
  
    it('should return undefined if the date is in the future', () => {
      expect(validateFutureDate(dateMustBeInTheFuture)('2023-01-02T00:00:00Z')).toBeUndefined();
    });
  });
  
  describe('validatePastDate', () => {
    it('should return an error message if the date is not valid', () => {
      expect(validatePastDate(invalidDate)('notADate')).toBeUndefined();
    });
  
    it('should return an error message if the date is in the future', () => {
      expect(validatePastDate(dateMustBeInThePast)('2023-01-02T00:00:00Z')).toBeUndefined();
    });
  
    it('should return undefined if the date is in the past', () => {
      expect(validatePastDate(dateMustBeInThePast)('2022-12-31T00:00:00Z')).toBeUndefined();
    });
  });

  describe('numberValidator', () => {
    it('should return an error message if value is not a valid number', () => {
      expect(numberValidator('Invalid number')('abc')).toBe('Invalid number');
    });

    it('should return undefined if value is a valid number', () => {
      expect(numberValidator('Invalid number')('1234567')).toBeUndefined();
    });
  });

  describe('passwordValidator', () => {
    it('should return an error message if password does not meet criteria', () => {
      expect(passwordValidator('Weak password')).toBeDefined();
    });

    it('should return undefined if password meets all criteria', () => {
      expect(passwordValidator('StrongPassword1!')).toBeUndefined();
    });
  });

});

const mockedMessages = {
    en: {
      general: {
        errors: {
          password: {
            notLength: 'Password must be at least 8 characters long.',
          },
        },
      },
    },
  };
    const { notLength } = mockedMessages.en.general.errors.password;
  
  describe('validatePassword', () => {
    it('should return the notLength error message if the password length is less than the minimum required', () => {
      const shortPassword = 'short'; 
        const result = passwordValidator(shortPassword);
        expect(result).toBe(notLength);
    });
  });

  
  const MymockedMessages = {
    en: {
      general: {
        errors: {
          password: {
            notCapital: 'Password must contain at least one uppercase letter.',
            notLowercase: 'Password must contain at least one lowercase letter.',
            notSpecial: 'Password must contain at least one digit.',
          },
        },
      },
    },
  };
  
  const { notCapital, notLowercase, notSpecial } = MymockedMessages.en.general.errors.password;
  
  describe('passwordValidator', () => {
    it('should return the notCapital error message if the password has no uppercase letters', () => {
      const passwordWithoutUppercase = 'lowercaseonly';
        const result = passwordValidator(passwordWithoutUppercase);
        expect(result).toBe(notCapital);
    });
  
    it('should return the notLowercase error message if the password has no lowercase letters', () => {
      const passwordWithoutLowercase = 'UPPERCASEONLY';
        const result = passwordValidator(passwordWithoutLowercase);
        expect(result).toBe(notLowercase);
    });
  
    it('should return the notSpecial error message if the password has no special characters', () => {
      const passwordWithoutSpecialCharacters = 'PasswordWithoutSpecialCharacters';
        const result = passwordValidator(passwordWithoutSpecialCharacters);
        expect(result).toBe(notSpecial);
    });
  });
  
  
  