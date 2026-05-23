import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    api: "",
    name: "",
    email: "",
    mobile: "",
    dob: "",
    place: "",
    promocode: "",
    code: "",
    uid: "",
    avatar: "",
  },

  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    logoutUser: (state) => {
      state.user = {
        api: "",
        name: "",
        email: "",
        mobile: "",
        dob: "",
        place: "",
        promocode: "",
        code: "",
        uid: "",
        avatar: "",
      };

      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;