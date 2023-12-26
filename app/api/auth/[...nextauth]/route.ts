import { config } from "@/auth";
import NextAuth from "next-auth";

export const authOptions = config;

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
