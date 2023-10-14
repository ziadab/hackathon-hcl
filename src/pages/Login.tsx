// import React from "react";
import useStore from "../store";
import { useForm } from "react-hook-form";
import { Button, FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { LoginSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUser } from "../api";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Login = () => {
  const [setUser] = useStore((state) => [state.setUser]);

  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });

  const loginHandler = async (data: any) => {
    const user = await getUser(data.email, data.password);
    if (user === null) {
      toast({
        title: "Invalid Credientials",
        description: "Unvalid email or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      return;
    }
    setUser(user);
    if (user.role === "admin") navigate("/admin");
    if (user.role === "user") navigate("/user");
  };
  return (
    <>
      <div
        className={`w-screen h-screen flex flex-col justify-center items-center font-sans`}
      >
        <h4 className="text-3xl mb-8">Log In</h4>
        <form
          className="md:w-1/3 w-10/12 text-center"
          onSubmit={handleSubmit(loginHandler)}
        >
          <FormControl isInvalid={errors.email?.message != undefined}>
            <Input
              type="email"
              placeholder="Email"
              size="md"
              border="2px"
              paddingX={8}
              paddingY={"6"}
              {...register("email")}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            className="mt-4"
            isInvalid={errors.password?.message != undefined}
          >
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
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
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
