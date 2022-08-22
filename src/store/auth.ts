import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  token: string | null;
  isAuthenticated: boolean;
  user: {
    id: string | null;
    displayableName: string | null;
    email: string | null;
  };
};

const initialState: SliceState = {
  token: null,
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
      console.log("pauload", action);
      localStorage.setItem("token", payload);
      /*       state = {
        token: "token",
        isAuthenticated: true,
        user: {
          id: "",
          displayableName: "",
          email: "",
        },
      }; */
      state.token = payload;
      state.isAuthenticated = true;
      state.user.id = "";
      state.user.displayableName = "";

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
