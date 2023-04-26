import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";
import AppColors from "../../../constants/AppColors";
import HomeStackNavigator from "../ChildStackNavigator/HomeStackNavigator";
import StateChangeStackNavigator from "../ChildStackNavigator/StateChangeStackNavigator";
import MyPageStackNavigator from "../ChildStackNavigator/MyPageStackNavigator";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={TAB_ONE_OP}
      />
      <Tab.Screen
        name="StateTab"
        component={StateChangeStackNavigator}
        options={TAB_TWO_OP}
      />
      <Tab.Screen
        name="MyPageTab"
        component={MyPageStackNavigator}
        options={TAB_THREE_OP}
      />
    </Tab.Navigator>
  );
}
const TAB_ONE_OP = {
  headerShown: false,
  tabBarLabel: "홈",
  tabBarActiveTintColor: AppColors.main,
  tabBarInactiveTintColor: AppColors.lightGray,
  //   tabBarIcon: ({ focused }: any) => {
  //     return focused ? (
  //       <Image source={require("../assets/Icons/Icon_tab_1_active.png")} />
  //     ) : (
  //       <Image source={require("../assets/Icons/Icon_tab_1.png")} />
  //     );
  //   },
};
const TAB_TWO_OP = {
  headerShown: false,
  tabBarLabel: "일정추가",
  tabBarActiveTintColor: AppColors.main,
  tabBarInactiveTintColor: AppColors.lightGray,
  //   tabBarIcon: ({ focused }: any) => {
  //     return focused ? (
  //       <Image source={require("../assets/Icons/Icon_tab_2_active.png")} />
  //     ) : (
  //       <Image source={require("../assets/Icons/Icon_tab_2.png")} />
  //     );
  //   },
};
const TAB_THREE_OP = {
  headerShown: false,
  tabBarLabel: "마이페이지",
  tabBarActiveTintColor: AppColors.main,
  tabBarInactiveTintColor: AppColors.lightGray,
  //   tabBarIcon: ({ focused }: any) => {
  //     return focused ? (
  //       <Image source={require("../assets/Icons/Icon_tab_3_active.png")} />
  //     ) : (
  //       <Image source={require("../assets/Icons/Icon_tab_3.png")} />
  //     );
  //   },
};
