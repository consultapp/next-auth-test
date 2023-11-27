"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

// export const metadata = {
//   title: "Private Layout - Simple Auth App",
//   description: "Simple Auth next.js app. Need Auth.",
// };

export default function Layout({ children, session }: SessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
