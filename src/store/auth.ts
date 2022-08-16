import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    login(state, action: PayloadAction<string>) {
      const payload = action.payload;
      localStorage.setItem("token", payload);
      state.token = payload;
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
