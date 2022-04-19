import { UserActions, UserActionTypes, UserState } from '../types/user';

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

export const userReducer = (
  state = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGOUT_USER:
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case UserActionTypes.AUTH_ANONYMUS_USERS:
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case UserActionTypes.AUTH_EMAIL_USERS:
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case UserActionTypes.AUTH_GOOGLE_USERS:
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case UserActionTypes.AUTH_ERROR:
      return {
        user: null,
        error: action.payload,
        loading: false,
      };
    case UserActionTypes.AUTH_PROGRESS:
      return {
        user: null,
        error: null,
        loading: true,
      };
    default:
      return state;
  }
};
