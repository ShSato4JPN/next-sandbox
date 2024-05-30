import { auth, signIn, signOut } from "../../../auth";

export default async function ServerButton() {
  const session = await auth();

  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button>sign in</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>sign out</button>
      </form>
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>login status</h2>
      <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
      <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>session data</h2>
      <p>{JSON.stringify(session)}</p>
    </>
  );
}
