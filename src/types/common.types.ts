import { JwtPayload } from 'jwt-decode';

export type CustomJwtPayload = {
  email: string;
  role: string;
} & JwtPayload;

export type TLoginCredentials = {
  email: string;
  password: string;
};

export interface IGenericErrorMsg {
  path: string | number;
  message: string;
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export interface ISuccessResponse {
  data?: any;
  meta?: IMeta;
  success?: boolean;
  message?: string;
  statusCode?: number;
}

export interface IErrorResponse {
  success?: boolean;
  message: string;
  errorMessages?: IGenericErrorMsg[];
  statusCode: number;
}

export interface IUserData {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  profileImage: string;
}

export interface ICurrentUser {
  email: string;
  role: string;
  name: string;
  profileImage: string;
  exp: number;
  iat: number;
  _id: string;
}
