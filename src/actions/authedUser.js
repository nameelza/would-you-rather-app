export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export function setAuthedUser(userId) {
  return {
    type: SET_AUTHED_USER,
    userId,
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
