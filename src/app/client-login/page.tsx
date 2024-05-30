"use client";

import ClientButtons from "@/src/components/ClientButtons";
import { SessionProvider } from "next-auth/react";

export default function ClientLogin() {
  return (
    <>
      <SessionProvider>
        <ClientButtons />
      </SessionProvider>
    </>
  );
}
