import { signIn } from "next-auth/react";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  onboarding: "/onboarding",
  dashboard: "/dashboard",
  profile: "/profile",
  settings: "/settings",
  notFound: "/404",
};

export const routingFunctions = {
  login: signIn,
};
