/* //STORE 14:06 min repaso martes
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
//redux thuink sirve para trabajar con lñas llamadas asincronas 
import thunk from "redux-thunk";
import { rootReducer } from "../reducer";


export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))   */

import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../reducer/authReducer'


export const store = configureStore({
  reducer: {
    auth: AuthReducer
  }
})