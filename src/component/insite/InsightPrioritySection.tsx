import { useGroceryStore } from "@/store/grocery-store";
import { Text, View } from "react-native";

const InsightPrioritySection = () => {
  const { items } = useGroceryStore();
  const hightPriority = items.filter(
    (item) => item.priority === "high" && !item.purchased,
  ).length;

  const hightPriorityTone =
    hightPriority === 0
      ? "Everything critical covered."
      : "Handle these first for a smoother trip.";
  return (
    <View className="rounded-3xl border border-border bg-card p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-foreground">
          High priority remaining
        </Text>
        <View
          className={`rounded-full px-3 py-1 ${hightPriority ? "bg-priority-high" : "bg-priority-low"}`}
        >
          <Text
            className={`text-xs font-bold uppercase ${hightPriority ? "text-priority-high-foreground" : "text-priority-low-foreground3"}`}
          >
            {hightPriority ? "Action" : "Clear"}
          </Text>
        </View>
      </View>
      <Text className="mt-1 text-3xl font-extrabold text-foreground">
        {hightPriority}
      </Text>
      <Text className="mt-1 text-sm text-muted-foreground">
        {hightPriorityTone}
      </Text>
    </View>
  );
};

export default InsightPrioritySection;
