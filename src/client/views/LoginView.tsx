import React, { useState, ReactElement } from "react";
import { useLoginQuery } from "../services/auth/queries.auth";
import { setStorage } from "../services/storage";

//Form Components
import Input from "../components/form/Input";
import Submit from "../components/form/Submit";


const Login = (props: LoginProps): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");

  const { mutate: adminLogin } = useLoginQuery()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    adminLogin({ username, password })
    setStorage("token", JSON.stringify(adminLogin))
  };

  return (
    <>
      <Input
        value={username}
        placeholder="username"
        change={(e) => setUsername(e.target.value)}
      >
        Username
      </Input>
      <Input
        value={password}
        placeholder="password"
        change={(e) => setUserPassword(e.target.value)}
      >
        Password
      </Input>
      <Submit click={handleSubmit}>Login</Submit>
    </>
  );
};

type LoginProps = {};

export default Login;
