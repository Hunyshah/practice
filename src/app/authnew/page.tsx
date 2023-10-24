"use client";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
type Variant = "REGISTER" | "LOGIN";
const AuthNew = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  const toggleHandler = () => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else if (variant === "REGISTER") {
      setVariant("LOGIN");
    }
  };
  return (
    <div className="min-h-full flex flex-col justify-center items-center h-screen ">
      <div className="flex  text-sky-500 font-semibold p-5 m-2 shadow-xl border-2">
        Auth for security
      </div>
      <div className="p-5 m-2 shadow-xl border-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              type="text"
              label="Name"
              register={register}
              required={true}
              id="Name"
            />
          )}
          <Input
            type="text"
            label="Email"
            register={register}
            required={true}
            id="email"
          />
          <Input
            type="password"
            label="Password"
            register={register}
            required={true}
            id="password"
          />
          <Button>{variant === "LOGIN" ? "SignIn" : "Register"}</Button>
        </form>
        <div
          onClick={toggleHandler}
          className="cursor-pointer hover:text-gray-400"
        >
          {variant === "LOGIN" ? "Create an Account" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default AuthNew;
