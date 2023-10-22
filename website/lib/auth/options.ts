import type { NextAuthOptions, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/lib/firestore";
import Google from "next-auth/providers/google";
import { getUserData, isOnboarded } from "../database";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "your-cool-username",
    //     },
    //     password: { label: "Password:", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     const { id, email } = credentials;

    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.id;
      session.user.role = token.role || "rider";
      session.user.onboarded = token.onboarded;
      session.user.firstName = token.firstName;

      return session;
    },
    jwt: async ({ token, user, account }) => {
      if (user) token.id = user.id;
      if (user) {
        let newData = await getUserData(user.id);
        token.firstName = newData.firstName;
        token.onboarded = newData.onboarded;
      }

      return token;
    },
  },
  adapter: FirestoreAdapter(firestore),
  pages: {
    newUser: "/onboarding/driver-or-rider",
  },
};
