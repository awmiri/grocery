import { clearHoleThePurchasedItem } from "@/lib/server/db-actions";

export async function POST() {
  try {
    await clearHoleThePurchasedItem();
    return Response.json(
      { message: "All purchased items cleared successfully" },
      { status: 200 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "failed to clear purchased item";
    return Response.json({ error: message }, { status: 500 });
  }
}
