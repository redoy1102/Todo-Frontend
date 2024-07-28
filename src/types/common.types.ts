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
