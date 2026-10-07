import {
  deleteGroceryItem,
  setGroceryPurchased,
  updateGroceryItemQuantity,
} from "@/lib/server/db-actions";

export async function DELETE(_request: Request, { id }: { id: string }) {
  try {
    await deleteGroceryItem(id);
    return Response.json(
      { message: "item delete successfully" },
      { status: 200 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "feiled to delete item";

    return Response.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request, { id }: { id: string }) {
  try {
    console.log("ITEM ID :", id);

    const body = await request.json();

    console.log("ITEM body :", body);

    const item = body.quantity
      ? await updateGroceryItemQuantity(id, body.quantity)
      : await setGroceryPurchased(id, body.purchased ?? true);

    console.log("✅ updated item:", item);

    if (!item) {
      console.log("❌ item not found:", id);
      return Response.json({ error: "item not found" }, { status: 404 });
    }

    return Response.json({ item }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "failed to update item";
    return Response.json({ error: message }, { status: 500 });
  }
}
