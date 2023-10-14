import React from "react";
import useStore from "../store";

const Login = () => {
  const [role, setRole] = useStore((state) => [state.role, state.setRole]);
  return <div>Login</div>;
};

export default Login;
