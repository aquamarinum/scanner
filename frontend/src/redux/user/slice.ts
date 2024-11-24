import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../@types/UserType";

const initialState: UserType | null = {
  id: 1,
  login: "",
  password: "",
  registrated: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
