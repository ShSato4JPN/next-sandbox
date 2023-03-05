export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const foo = searchParams.get("foo");
  const bar = searchParams.get("bar");

  return new Response(JSON.stringify({ foo, bar }));
}
