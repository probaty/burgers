import { User } from 'firebase/auth';
import { UserModel } from './userModel';

export interface UserState {
  user: null | UserModel;
  error: null | string;
  loading: boolean;
}

export enum UserActionTypes {
  AUTH_ANONYMUS_USERS = 'AUTH_ANONYMUS_USERS',
  AUTH_PROGRESS = 'AUTH_PROGRESS',
  LOGOUT_USER = 'LOGOUT_USER',
  AUTH_EMAIL_USERS = 'AUTH_EMAIL_USERS',
  AUTH_GOOGLE_USERS = 'AUTH_GOOGLE_USERS',
  AUTH_ERROR = 'AUTH_ERROR',
}

interface LogoutUserAction {
  type: UserActionTypes.LOGOUT_USER;
  payload: UserModel;
}
interface AuthProgressAction {
  type: UserActionTypes.AUTH_PROGRESS;
}
interface AuthAnonymusUserAction {
  type: UserActionTypes.AUTH_ANONYMUS_USERS;
  payload: UserModel;
}
interface AuthGoogleUserAction {
  type: UserActionTypes.AUTH_GOOGLE_USERS;
  payload: UserModel;
}
interface AuthEmailUserAction {
  type: UserActionTypes.AUTH_EMAIL_USERS;
  payload: UserModel;
}
interface AuthErrorAction {
  type: UserActionTypes.AUTH_ERROR;
  payload: string;
}

export type UserActions =
  | LogoutUserAction
  | AuthAnonymusUserAction
  | AuthGoogleUserAction
  | AuthEmailUserAction
  | AuthErrorAction
  | AuthProgressAction;
