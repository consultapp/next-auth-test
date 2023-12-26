import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainArea from "./components/MainArea/MainArea";
import HeaderArea from "./components/HeaderArea/HeaderArea";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Using Next Auth",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderArea />
        <MainArea>{children}</MainArea>
      </body>
    </html>
  );
}
