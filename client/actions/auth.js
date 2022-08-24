import { types } from '../types/types';
import AuthService from "../helpers/authService";

export const login = (user) => (dispatch) => {
  return AuthService.logIn(user).then(
    (response) => {
<<<<<<< HEAD
      console.log(response)
=======
>>>>>>> ad8cee1a7133dabe4265fafde4f8f3dd12649d0a
      if (response.status === "success") {
        dispatch({
          type: types.authLogin,
          payload: response.user ,
        });
Promise.resolve();
        return response;
      }
      return response;
    },
    (error) => {
      console.log(error)
      const message = error.toString();
Promise.reject();
      return message;
    }
  );
};

export const register = (user) => (dispatch) => {
  return AuthService.register(user).then(
    (response) => {
      console.log(response)
      if (response.status === "success") {
        console.log('entra en success')
        dispatch({
          type: types.authRegister,
          payload: { user: response.user },
        });
Promise.resolve();
        return response;
      }
    },
    (error) => {
      const message = error.toString();
Promise.reject();
      return message;
    }
  );
};

export const logout = () => (dispatch) => {
  return AuthService.logOut().then((response) => {
    if (response.status === "success") {
      dispatch({
        type: types.authLogout,
      });
      Promise.resolve();
      return response;
    }
  });
};