import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import axios from "axios";

interface ValuesI {
  email: string | undefined;
  password: string | undefined;
}

/* export function loginHandler(values: ValuesI, token: string) {
  const dispatch = useDispatch();
  axios.post("http://localhost:3001/api/v1/user/login", values).then((res) => {
    console.log(res.data.body.token);
    token = res.data.body.token;
    dispatch(authActions.login(token));
  });
}
 */
