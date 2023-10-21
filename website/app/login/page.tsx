"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";
import Google from "next-auth/providers/google";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("email", { required: true, maxLength: 20 })} />
    //   <input {...register("password")} type="password" />
    //   <input type="submit" />
    // </form>

    // sign in with google
    <GoogleButton
      onClick={() => {
        signIn("google", {
          redirect: true,
          callbackUrl: "/",
        });
      }}
    />
  );
}
