import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  isAuthenticated: boolean;
  user: {
    id: string | null;
    displayableName: string | null;
    email: string | null;
  };
};

const initialState: SliceState = {
  isAuthenticated: false,
  user: {
    id: null,
    displayableName: null,
    email: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      const payload = action.payload;
      localStorage.setItem("token", payload);
      state.isAuthenticated = true;
      //Ajout de timer pour supprimer le token une fois sa date de validation expirée
    },
    getProfile(state, action: PayloadAction<any>) {
      const payload = action.payload;
      state.user.id = payload.id;
      state.user.displayableName = payload.name;
      state.user.email = payload.email;
    },
    storedToken(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem("token");
      return (state = initialState);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
