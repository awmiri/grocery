import ListHeroCard from "@/component/List/ListHeroCard";
import PendingItemCard from "@/component/List/PendingItemCard";
import TabScreenBackGround from "@/component/TabScreenBackGround";
import { ScrollView, Text, View } from "react-native";
import { useGroceryStore } from "../../store/grocery-store";

const ListScreen = () => {
  const { items } = useGroceryStore();
  const pendingItems = items.filter((item) => !item.purchased);

  console.log("items : ", items);

  return (
    <ScrollView
      className="flex-1 bg-background py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
    >
      <TabScreenBackGround />
      <ListHeroCard />

      <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">
          {pendingItems.length} active
        </Text>
      </View>
      {pendingItems.map((item) => (
        <PendingItemCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default ListScreen;
