import { signIn } from "next-auth/react";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  onboarding: "/onboarding",
  ride: "/book",
  profile: "/profile",
  settings: "/settings",
  notFound: "/404",
  driverOrRider: "/driver-or-rider",
};

export const routingFunctions = {
  login: signIn,
};
