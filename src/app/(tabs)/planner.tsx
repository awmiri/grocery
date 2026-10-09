import PlanerFormCard from "@/component/planner/PlanerFormCard";
import PlannerHeroImage from "@/component/planner/PlannerHeroImage";
import TabScreenBackGround from "@/component/TabScreenBackGround";
import { useGroceryStore } from "@/store/grocery-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

const PlannerScreen = () => {
  const { items } = useGroceryStore();
  const pendingCount = items.filter((item) => !item.purchased).length;

  const hightPriorityCount = items.filter(
    (item) => !item.purchased && item.priority === "high",
  ).length;

  const totalQuantity = items
    .filter((item) => !item.purchased)
    .reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ScrollView
      className="flex-1 bg-background py-4"
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
    >
      <TabScreenBackGround />

      <View className="gap-4 rounded-3xl border border-border bg-card p-5">
        <View className="flex-row items-start justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-xs font-semibold uppercase tracking-[1.2px] text-muted-foreground">
              Grocery planner
            </Text>
            <Text className="mt-1 text-3xl font-bold leading-9 text-foreground">
              plan smarter , shop calmer.
            </Text>
            <Text className="mr-2 text-sm leading-5 text-muted-foreground">
              Organize your next grocery run with categories, quantities, and
              priority in one place
            </Text>
          </View>
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary">
            <FontAwesome6
              name="wand-magic-sparkles"
              size={18}
              color="#ffffff"
            />
          </View>
        </View>

        <View className="flex-row gap-2">
          <View className="flex-1 rounded-2xl border border-border bg-background/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">
              Pending
            </Text>
            <Text className="mt-1 text-xl font-bold text-foreground">
              {pendingCount}
            </Text>
          </View>

          <View className="flex-1 rounded-2xl border border-border bg-background/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">
              Units
            </Text>
            <Text className="mt-1 text-xl font-bold text-foreground">
              {totalQuantity}
            </Text>
          </View>

          <View className="flex-1 rounded-2xl border border-border bg-background/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">
              Pending
            </Text>
            <Text className="mt-1 text-xl font-bold text-foreground">
              {pendingCount}
            </Text>
          </View>
        </View>
      </View>

      <PlannerHeroImage />

      <View className="px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Build your list
        </Text>
        <Text className="mt-1 text-sm text-muted-foreground">
          Add items with the right quantity, category, and urgency
        </Text>
      </View>
      <PlanerFormCard />
    </ScrollView>
  );
};

export default PlannerScreen;
