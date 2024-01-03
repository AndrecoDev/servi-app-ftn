import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "@/types/index";

const initialState: IAuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
