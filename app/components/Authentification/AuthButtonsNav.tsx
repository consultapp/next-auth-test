import { useSession } from "next-auth/react";
import SignButton from "./SignButton";
import { auth } from "@/auth";

export default async function AuthButtonsNav() {
  const session = await auth();
  console.log("session", session);

  return (
    <>
      {session ? (
        <p>Signed in as {session?.user?.email}</p>
      ) : (
        <p> Not signed in</p>
      )}
      <SignButton />
    </>
  );
}
