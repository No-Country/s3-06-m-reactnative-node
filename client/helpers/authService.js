import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";

const logIn = async (user) => {

  const { username, password } = user;
  const email = username;
  const datajson = await api.authLogin(email, password);
  if (datajson.status === 200 && datajson.resjson.token) {
    return {
      status: "success",
      message: "You are redirecting to home page",
      user: {
        token: datajson.resjson.token,
        user: datajson.resjson.user,
      },
    };
  }else{

  }

  if (datajson.status === 400) {
     if(datajson.resjson.msg === "credentials incorrect"){
      return {
        status: "error",
        message: datajson.resjson.msg
      };
    } 
    return {
      status: "error",
      message: datajson.resjson.errors[0].msg
    };
  }
};

const register = async (user) => {
  const { email, password, name } = user;
  const datajson = await api.authRegister(email, password, name);
  if (datajson.resjson.msg === "user succesfelly created" && datajson.resjson.token) {
    // backend mal response message
    return {
      status: "success",
      message: "You are redirecting to home page",
      user: {
        token: datajson.resjson.token,
        user: datajson.resjson.user,
      },
    };
  }
  if (datajson.status === 400) {
    if(datajson.resjson.msg){
      return {
        status: "error",
        message: datajson.resjson.msg
      };
    }
   return {
     status: "error",
     message: datajson.resjson.errors[0].msg || datajson.resjson.msg
   };
 }
};

const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: "success",
    message: "You are logged out",
  };
};
export default {
  logIn,
  logOut,
  register,
};
