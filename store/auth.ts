import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: SliceState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const payload = action.payload;
      //put the token into localStorage
      localStorage.setItem("token", payload.token);
      //Set the token = token
      state.token = localStorage.getItem("token") || payload.token;
      //isAuthenticated = true
      state.isAuthenticated = true;

      //Ajout de timer pour supprimer le token une fois sa date de validation expirée
    },
    logout(state) {
      localStorage.removeItem("token");
      return (state = initialState);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
