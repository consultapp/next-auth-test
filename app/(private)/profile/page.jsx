"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  console.log("session", session);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <main>
      <h1>Profile page</h1>

      <hr />
      <h2>User Info:</h2>
      <p>{session.user?.name}</p>
      <p>{session.user?.email}</p>
    </main>
  );
}
