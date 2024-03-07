/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { HttpMethods } from "./utils";
import { config } from "./config";
import { getToken } from "./redux/reducers/auth";

const PING = "/api/ping";
const LOGIN = "/api/login";
export const INVITE = "/api/invite";
export const REGISTER = "/api/user";
export const RESET_PASSWORD = "/api/reset-password";
export const RESET_PASSWORD_REQUEST_LINK = "/api/reset-password/request-link";
export const PROFILE = "/api/profile";
export const ALL_USERS = "/api/users";
export const USER_DETAILS = "/api/user";
export const DELETE_USER = "/api/user";
export const OPTIONS_DEPARTMENT = "/api/department";
export const UPDATE_USER = "/api/user";
export const USER_PROFILE = "/api/user/profile";

// Add your api calls here

export const apiCall = (
  endpoint: string,
  method = HttpMethods.GET,
  body?: any,
  isFormData?: boolean
): Promise<any> => {
  const headers = new Headers({
    Accept: "application/json",
  });
  if (!isFormData) {
    headers.append("Content-Type", "application/json");
  }
  const token = getToken();

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  let finalBody: string | null | undefined = body;

  if (body && !isFormData) {
    finalBody = JSON.stringify(body);
  }
  const url = config.apiHost + endpoint;

  return new Promise<any>((resolve, reject) => {
    fetch(url, { body: finalBody, headers, method })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const profile = (): Promise<string> => apiCall(PROFILE);

export const ping = (): Promise<string> => apiCall(PING);

export const login = (formData: any): Promise<string> =>
  apiCall(LOGIN, HttpMethods.POST, formData);
