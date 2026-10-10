import {
  GroceryCategory,
  GroceryPriority,
  useGroceryStore,
} from "@/store/grocery-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
const categories: GroceryCategory[] = [
  "Bakery",
  "Dairy",
  "Pantry",
  "Produce",
  "Snacks",
];
const priorityItems: GroceryPriority[] = ["low", "medium", "high"];
const CategoryIcons = {
  Produce: "leaf",
  Dairy: "cow",
  Bakery: "bread-slice",
  Pantry: "box-open",
  Snacks: "cookie-bite",
};
const PlanerFormCard = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [Category, setCategory] = useState<GroceryCategory>("Bakery");
  const [priority, setPriority] = useState<GroceryPriority>("low");

  const { error, addItem } = useGroceryStore();

  const canCreate = name.trim().length > 0;

  const handleQuantityChange = (value: string) => {
    setQuantity(value.replace(/[^0-9]/g, ""));
  };

  const createItem = async () => {
    await addItem({
      name: name.trim(),
      category: Category,
      priority,
      quantity: Number(quantity),
    });

    Alert.alert("Success", "Item Create Successfully");

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

      {/* CATEGORIES */}
      <Text className="text-sm font-semibold text-foreground">Category</Text>
      <View className="mt-2 flex-row flex-wrap gap-2">
        {categories.map((option) => {
          const active = option === Category;
          return (
            <Pressable
              key={option}
              onPress={() => setCategory(option)}
              className={`flex-row items-center rounded-full px-4 py-2 ${active ? "bg-primary" : "bg-secondary"} transition-all duration-300`}
            >
              <FontAwesome6
                name={CategoryIcons[option]}
                size={14}
                color={active ? "#fff" : "#486856"}
              />
              <Text
                className={`ml-2 text-sm font-semibold ${active ? "text-primary-foreground" : "text-secondary-foreground"}`}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* PRIORITY */}
      <Text className="text-sm font-semibold text-foreground">Priority</Text>
      <View className="mt-2 flex-row flex-wrap gap-2">
        {priorityItems.map((priorityItem) => {
          const active = priorityItem === priority;
          const Icon =
            priorityItem === "high"
              ? "bolt"
              : priorityItem === "medium"
                ? "compass"
                : "seedling";
          return (
            <Pressable
              key={priorityItem}
              onPress={() => setPriority(priorityItem)}
              className={`flex-row items-center rounded-full px-4 py-2 ${active ? "bg-primary" : "bg-secondary"} transition-all duration-300`}
            >
              <FontAwesome6
                name={Icon}
                size={14}
                color={active ? "#fff" : "#486856"}
              />
              <Text
                className={`ml-2 text-sm font-semibold ${active ? "text-primary-foreground" : "text-secondary-foreground"}`}
              >
                {priorityItem}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        className={`mt-5 flex-row items-center justify-center rounded-2xl py-3 ${canCreate ? "bg-primary" : "bg-muted"}`}
        onPress={createItem}
        disabled={!canCreate}
      >
        <FontAwesome6
          name="plus"
          size={14}
          color={canCreate ? "#ffffff" : "#7a9386"}
        />
        <Text
          className={`ml-2 text-base font-semibold ${canCreate ? "text-primary-foreground" : "text-muted-foreground"}`}
        >
          Add to grocery List
        </Text>
      </Pressable>
      {error ? (
        <View className="mt-3 rounded-2xl border border-destructive bg-destructive px-3 py-2">
          <Text className="text-sm text-white text-center uppercase">
            {error}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default PlanerFormCard;
