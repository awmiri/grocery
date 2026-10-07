import CompletedItems from "@/component/List/CompletedItems";
import ListHeroCard from "@/component/List/ListHeroCard";
import PendingItemCard from "@/component/List/PendingItemCard";
import TabScreenBackGround from "@/component/TabScreenBackGround";
import { FlatList, Text, View } from "react-native";
import { useGroceryStore } from "../../store/grocery-store";

const ListScreen = () => {
  const { items, isLoading } = useGroceryStore();
  const pendingItems = items.filter((item) => !item.purchased);

  return (
    <FlatList
      className="flex-1 bg-background"
      data={pendingItems}
      contentInsetAdjustmentBehavior="automatic"
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PendingItemCard item={item} />}
      contentContainerStyle={{ gap: 14, padding: 20 }}
      ListHeaderComponent={
        <View style={{ gap: 14 }}>
          <TabScreenBackGround />
          <ListHeroCard />
          <View className="flex-row items-center justify-between px-1">
            <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
              Shopping Item
            </Text>
            <Text className="text-sm text-muted-foreground">
              {pendingItems.length} active
            </Text>
          </View>
        </View>
      }
      ListFooterComponent={<CompletedItems />}
    />
  );
};

export default ListScreen;
