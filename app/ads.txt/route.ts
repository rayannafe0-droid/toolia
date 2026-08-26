export async function GET() {
  const adsTxt = "google.com, pub-6654030018352582, DIRECT, f08c47fec0942fa0";

  return new Response(adsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}