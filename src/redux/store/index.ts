import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/user.slice";

import authSlice from "../slices/auth.slice";

const rootReducer = combineReducers({
  auth: authSlice,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
