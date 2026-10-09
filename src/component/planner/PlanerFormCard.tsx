import {
    GroceryCategory,
    GroceryPriority,
    useGroceryStore,
} from "@/store/grocery-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
const categories: GroceryCategory[] = [
  "Bakery",
  "Dairy",
  "Pantry",
  "Produce",
  "Snacks",
];
const priority: GroceryPriority[] = ["high", "low", "medium"];
const CategoryIcons = {
  produce: "leaf",
  Dairy: "cow",
  Bakery: "bread-slice",
  pantry: "box-open",
  Snacks: "cookies-bite",
};
const PlanerFormCard = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [Category, setCategory] = useState<GroceryCategory>("Dairy");
  const [priority, setPriority] = useState<GroceryPriority>("low");

  const { error, addItem } = useGroceryStore();

  const canCreate = name.trim().length > 0;

  const handleQuantityChange = (value: string) => {
    setQuantity(value.replace(/[^0-9]/g, ""));
  };

  const reateItem = async () => {
    await addItem({
      name: name.trim(),
      category: Category,
      priority,
      quantity: Number(quantity),
    });

    setName("");
    setQuantity("1");
    setCategory("Produce");
    setPriority("low");
  };
  return (
    <View className="rounded-3xl border border-border bg-card p-4">
      {/* name */}
      <Text className="text-sm font-semibold text-foreground">Item name</Text>
      <View className="mt-2 flex-row items-center rounded-2xl border border-input bg-muted px-4 py-3">
        <FontAwesome6 name="bag-shopping" size={13} color="#5b7567" />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Ex: Blueberries"
          className="ml-3 flex-1 text-base text-foreground"
          placeholderTextColor="#8aa397"
        />
      </View>

      {/* QUANTITY */}
      <Text className="text-sm font-semibold text-foreground">Quantity</Text>
      <View className="mt-2 flex-row items-center rounded-2xl border border-input bg-muted px-4 py-3">
        <FontAwesome6 name="hashtag" size={13} color="#5b7567" />
        <TextInput
          value={quantity}
          onChangeText={handleQuantityChange}
          keyboardType="number-pad"
          placeholder="1"
          className="ml-3 flex-1 text-base text-foreground"
          placeholderTextColor="#8aa397"
        />
      </View>
    </View>
  );
};

export default PlanerFormCard;
