import { createGroceryItem, listGroceryItems } from "@/lib/server/db-actions";

export async function GET() {
  console.log("🔥 API GET /api/items called");

  try {
    console.log("⏳ trying to connect database...");

    const items = await listGroceryItems();

    console.log("✅ database returned:", items);

    return Response.json({ items });
  } catch (error) {
    console.error("❌ DATABASE ERROR:", error);

    const message =
      error instanceof Error ? error.message : "Failed to fetch items";

    return Response.json({ error: message }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, quantity, category, priority } = body;

    if (!name || !category || !priority) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const item = await createGroceryItem({
      name,
      quantity,
      category,
      priority,
    });

    return Response.json({ item }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "failed to create item";

    return Response.json({ error: message }, { status: 500 });
  }
}
