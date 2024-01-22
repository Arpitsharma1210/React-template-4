/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import moment from "moment";
import { ErrorMessage, Validator } from "../hooks";
import messages from "../messages";

export const required =
  (errMessage: string): Validator =>
  (value: any): ErrorMessage =>
    !value || value.length === 0 ? errMessage : undefined;

export const requiredIf =
  (errMessage: string, callback: (formValues: any) => boolean): Validator =>
  (value: any, formValues: any): ErrorMessage => {
    if (callback(formValues)) {
      return required(errMessage)(value);
    }
    return undefined;
  };
export const emailValidator = (value?: string): ErrorMessage =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? messages?.general?.errors?.invalidEmail
    : undefined;

export const domainValidator = (value?: string): ErrorMessage =>
  value && value.includes(messages?.company?.domain)
    ? undefined
    : messages?.general?.errors?.invalidDomain;

export const confirmPassword =
  (errMessage: string, validateWith = "password"): Validator =>
  (value: any, formValues: any): ErrorMessage =>
    value && formValues?.[validateWith]?.value !== value
      ? errMessage
      : undefined;

export const validateDate =
  (message: string) =>
  (value?: string): ErrorMessage =>
    value && !moment(value).isValid() ? message : undefined;

export const validateFutureDate =
  (message: string) =>
  (value?: string): ErrorMessage => {
    const today = moment();
    return (value && !moment(value).isValid()) || moment(value).isBefore(today)
      ? message
      : undefined;
  };

export const validatePastDate =
  (message: string) =>
  (value?: string): ErrorMessage => {
    const today = moment();
    return (value && !moment(value).isValid()) || moment(value).isAfter(today)
      ? message
      : undefined;
  };

export const numberValidator =
  (message: string) =>
  (value?: string): ErrorMessage =>
    value && !/^\d{7,}$/i.test(value) ? message : undefined;

export const passwordValidator = (value?: string): ErrorMessage => {
  if (value) {
    if (!/^.{8,}$/.test(value)) {
      return messages?.general?.errors?.password?.notLength;
    }

    if (!/[A-Z]/.test(value)) {
      return messages?.general?.errors?.password?.notCapital;
    }

    if (!/[a-z]/.test(value)) {
      return messages?.general?.errors?.password?.notLowercase;
    }

    if (!/\d/.test(value)) {
      return messages?.general?.errors?.password?.notNumber;
    }

    if (!/[@$!%*?&#]/.test(value)) {
      return messages?.general?.errors?.password?.notSpecial;
    }

    return undefined;
  }
};

export const decimalValidator =
  (message: string) =>
  (value?: string): ErrorMessage =>
    value && !/^[0-9]\d*(\.\d+)?$/i.test(value) ? message : undefined;
