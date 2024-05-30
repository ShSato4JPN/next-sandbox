"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function ClientButtons() {
  const { data: session, status } = useSession();
  return (
    <>
      <button onClick={() => signIn()}>sign in</button>
      <button onClick={() => signOut()}>sign out</button>
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>login status</h2>
      <p>{status}</p>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>session data</h2>
      <p>{JSON.stringify(session, null, 2)}</p>
    </>
  );
}
