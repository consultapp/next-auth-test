import SignButton from "./SignButton";
import { auth } from "@/auth";

export default async function AuthButtonsNav() {
  const session = await auth();
  console.log("session", session);

  return (
    <>
      {session ? <p>{session?.user?.name}</p> : <p> Not signed in</p>}
      <SignButton />
    </>
  );
}
