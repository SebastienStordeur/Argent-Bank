import axios from "axios";

export function loginHandler(values: {
  email: string | undefined;
  password: string | undefined;
}) {
  axios.post("http://localhost:3001/api/v1/user/login", values).then((res) => {
    console.log(res);
  });
}
