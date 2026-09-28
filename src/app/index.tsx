import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-white">
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Link href={"/about"} className="">
        about page
      </Link>
      <Link href={"/(auth)/sign-in"} className="">
        login
      </Link>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 200, height: 200, borderRadius: 20, marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
