import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Andres Criollo",
  profile: "Developer",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const allUsers = (state: any) => state.user;

export default userSlice.reducer;
