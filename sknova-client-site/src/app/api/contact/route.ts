export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  return new Response(
    JSON.stringify({ success: true, message: "Form temporarily disabled" }),
    { status: 200 }
  );
}
