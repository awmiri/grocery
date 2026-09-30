import { ClerkProvider, useAuth } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider,
  useRouter,
  useSegments,
} from "expo-router";
import { useColorScheme } from "react-native";
import "../../global.css";
import { useEffect } from "react";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}
const AuthNavigation = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (!isLoaded) return;

    const isAuthGroup = segments[0] === "(auth)";

    if (!isSignedIn && !isAuthGroup) {
      router.replace("/(auth)/sign-in");
    }
    if (isSignedIn && isAuthGroup) {
      router.replace("/");
    }
  }, [isLoaded, isSignedIn, segments]);

  return <Stack screenOptions={{ headerShown: false }} />;
};
export default function RootLayout() {
  const colorSchema = useColorScheme();
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ThemeProvider value={colorSchema === "dark" ? DarkTheme : DefaultTheme}>
        <AuthNavigation />
      </ThemeProvider>
    </ClerkProvider>
  );
}
