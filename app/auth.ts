import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const config: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "Dmitry" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          username: "Dmitry",
          password: "12345",
          id: "1",
          name: "Dmitry",
          email: "info@consultapp.ru",
        };
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password &&
          user
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
};

// Use it in server contexts
export async function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return await getServerSession(...args, config);
}
