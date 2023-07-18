import React, { useState, ReactElement } from "react";
import { useLoginQuery } from "../services/auth/queries.auth";
import { setStorage } from "../services/storage";

//Form Components
import Input from "../components/form/Input";
import Submit from "../components/form/Submit";

//Status Components
import Loading from "../components/status/Loading";
import Alert from "../components/status/Alert";


const Login = (props: LoginProps): ReactElement => {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");

  const { mutate: adminLogin, isError, isLoading } = useLoginQuery()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    adminLogin({ username, password })
    setStorage("token", JSON.stringify(adminLogin))
  };


  if (isLoading) {
    return <Loading />
  }


  return (
    <>
      <Input
        value={username}
        name="lol"
        placeholder="username"
        change={(e) => setUsername(e.target.value)}
      >
        Username
      </Input>
      <Input
        value={password}
        name="lol"
        placeholder="password"
        change={(e) => setUserPassword(e.target.value)}
      >
        Password
      </Input>
      <Submit click={handleClick}>Login</Submit>
    </>
  );
};

type LoginProps = {};

export default Login;
