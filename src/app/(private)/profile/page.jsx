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
      <p>Cтраница с произвольным текстом, недоступная без авторизации.</p>
    </main>
  );
}
