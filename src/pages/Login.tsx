// import React from "react";
// import useStore from "../store";
import { useForm } from "react-hook-form";
import { Button, FormControl, Input } from "@chakra-ui/react";

const Login = () => {
  // const [role, setRole] = useStore((state) => [state.role, state.setRole]);
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div
        className={`w-screen h-screen flex flex-col justify-center items-center font-sans`}
      >
        <h4 className="text-xl mt-2">Welcome back</h4>

        <form
          className="md:w-1/3 w-10/12 text-center"
          // onSubmit={handleSubmit(loginHandler)}
        >
          <FormControl>
            <Input
              type="email"
              placeholder="Email"
              size="md"
              border="2px"
              paddingX={8}
              paddingY={"6"}
              {...register("email")}
            />
          </FormControl>
          <FormControl className="mt-4">
            <Input
              type="password"
              placeholder="Password"
              size="md"
              paddingX={8}
              paddingY={"6"}
              borderColor={"#000000"}
              border="2px"
              {...register("password")}
            />
          </FormControl>
          <Button
            size="md"
            width="100%"
            backgroundColor={"#000000"}
            color={"#FFFFFF"}
            paddingX={8}
            paddingY={"6"}
            className="mt-6"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
