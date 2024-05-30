import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/client-login">Client Login</Link>
      </div>
      <div>
        <Link href="/server-login">Sever Login</Link>
      </div>
    </>
  );
}
