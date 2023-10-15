"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { Button } from "./ui/button";
import { ModeToggle } from "./darktoggle";
import { CartContextP } from "@/contextstore/cartcontext";
import { UseCounter } from "@/zustandstore/useCounter";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const submitForm = async (data: FieldValues) => {
    console.log(data);
    reset();
  };
  const ctx = useContext(CartContextP);
  const { count, addnumber } = UseCounter();

  console.log(ctx);
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h3>Signup Form</h3>
      <h4>{count}</h4>
      <button
        onClick={() => {
          addnumber();
        }}
      >
        add count by 3
      </button>
      <Button>home</Button>
      <ModeToggle />
      <form
        onSubmit={handleSubmit(submitForm)}
        action=""
        className="flex flex-col gap-5 border-blue-500 border-2 p-4 m-3"
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          {...register("username", { required: "email is required" })}
          placeholder="username"
          type="text"
        />
        {errors.username && <p className="bg-red-500"> email is required </p>}
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          {...register("password", { required: "password shoud be required" })}
          id="pass"
          placeholder="password"
        />
        <label htmlFor="pass2">Confirm Password</label>
        <input
          type="password"
          {...register("pass2", {
            required: "this password is empty",
            validate: (values) =>
              values === getValues("password") || "Password must be match",
          })}
          id="pass2"
          placeholder="confirm password"
        />
        {errors.pass2 && <p className="bg-red-400">password is not match</p>}
        <button disabled={isSubmitting} className="bg-red-500">
          signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
