import { useGroceryStore } from "@/store/grocery-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

const CompletedItems = () => {
  const { removeItem, togglePurchased, items } = useGroceryStore();

  const completedItem = items.filter((item) => item.purchased);

  if (!completedItem.length) return null;

  return (
    <View className="mt-3 rounded-3xl border border-border bg-secondary p-4">
      <Text className="text-sm font-semibold uppercase tracking-[1px] text-secondary-foreground">
        Completed
      </Text>

      {completedItem.map((item) => (
        <View
          className="mt-3 flex-row items-center justify-between rounded-2xl border border-border bg-card px-3 py-2"
          key={item.id}
        >
          <View className="flex-row items-center gap-2">
            <Pressable
              className="h-6 w-6 items-center justify-center rounded-full bg-success"
              onPress={() => togglePurchased(item.id)}
            >
              <FontAwesome6 name="check" size={12} color="#ffffff" />
            </Pressable>
            <Text className="text-base text-muted-foreground line-through">
              {item.name}
            </Text>
          </View>
          <Pressable
            className="h-8 w-8 items-center justify-center rounded-lg bg-destructive"
            onPress={() => removeItem(item.id)}
          >
            <FontAwesome6 name="trash" size={12} color="#d35f58" />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default CompletedItems;
