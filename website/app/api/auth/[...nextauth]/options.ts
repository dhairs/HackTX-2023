import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "@/lib/firestore";
import Google from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // Google({
    //   clientId: process.env.GOOGLE_ID as string,
    //   clientSecret: process.env.GOOGLE_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: { label: "Password:", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "42", name: "Dave", password: "nextauth" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }

        // if (user) {
        //           return user;
        //         }

        //         return null;
        //       },
      },
    }),
  ],
  //   session: {
  //     strategy: "jwt",
  //   },
  //   callbacks: {
  //     session: async ({ session, token }) => {
  //       session.user.id = token.id;
  //       session.user.role = token.role || "user";
  //       return session;
  //     },
  //     jwt: async ({ token, user, account }) => {
  //       if (user) token.id = user.id;
  //       return token;
  //     },
  //   },
  //   adapter: FirestoreAdapter(firestore),
};
