import InsightCategoriesSection from "@/component/insite/InsightCategoriesSection";
import InsightStatsSection from "@/component/insite/InsightStatsSection";
import UserProfile from "@/component/insite/UserProfile";
import TabScreenBackGround from "@/component/TabScreenBackGround";
import { ScrollView } from "react-native";

const InsightsScreen = () => {
  return (
    <ScrollView
      className="flex-1 bg-background py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <TabScreenBackGround />
      <UserProfile />
      <InsightStatsSection />
      <InsightCategoriesSection />
      {/* <InsightPrioritySection /> */}
      {/* <InsightClearButton /> */}
    </ScrollView>
  );
};

export default InsightsScreen;
