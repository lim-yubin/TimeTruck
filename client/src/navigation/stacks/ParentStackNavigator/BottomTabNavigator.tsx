import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image, StyleSheet } from "react-native";
import AppColors from "../../../constants/AppColors";
import HomeStackNavigator from "../ChildStackNavigator/HomeStackNavigator";
import StateChangeStackNavigator from "../ChildStackNavigator/StateChangeStackNavigator";
import MyPageStackNavigator from "../ChildStackNavigator/MyPageStackNavigator";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="StateTab">
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
  headerShown: true,
  tabBarLabel: "모아보기",
  tabBarActiveTintColor: AppColors.dark,
  tabBarInactiveTintColor: AppColors.main,
  headerTitle: "",
  headerStyle: {
    backgroundColor: AppColors.main,
  },
  headerShadowVisible: false,
  headerLeft: () => (
    <View style={css.headerLeftContainer}>
      <Text style={css.headerLeft}>모아보기</Text>
    </View>
  ),

  //   tabBarIcon: ({ focused }: any) => {
  //     return focused ? (
  //       <Image source={require("../assets/Icons/Icon_tab_1_active.png")} />
  //     ) : (
  //       <Image source={require("../assets/Icons/Icon_tab_1.png")} />
  //     );
  //   },
};
const TAB_TWO_OP = {
  headerShown: true,
  tabBarLabel: "상태변경",
  tabBarActiveTintColor: AppColors.dark,
  tabBarInactiveTintColor: AppColors.main,
  headerTitle: "",
  headerStyle: {
    backgroundColor: AppColors.main,
  },
  headerShadowVisible: false,
  headerLeft: () => (
    <View style={css.headerLeftContainer}>
      <Text style={css.headerLeft}>상태변경</Text>
    </View>
  ),
  //   tabBarIcon: ({ focused }: any) => {
  //     return focused ? (
  //       <Image source={require("../assets/Icons/Icon_tab_2_active.png")} />
  //     ) : (
  //       <Image source={require("../assets/Icons/Icon_tab_2.png")} />
  //     );
  //   },
};
const TAB_THREE_OP = {
  headerShown: true,
  tabBarLabel: "내정보",
  tabBarActiveTintColor: AppColors.dark,
  tabBarInactiveTintColor: AppColors.main,
  headerTitle: "",
  headerStyle: {
    backgroundColor: AppColors.main,
  },
  headerShadowVisible: false,
  headerLeft: () => (
    <View style={css.headerLeftContainer}>
      <Text style={css.headerLeft}>내정보</Text>
    </View>
  ),
  //   tabBarIcon: ({ focused }: any) => {
  //     return focused ? (
  //       <Image source={require("../assets/Icons/Icon_tab_3_active.png")} />
  //     ) : (
  //       <Image source={require("../assets/Icons/Icon_tab_3.png")} />
  //     );
  //   },
};

const css = StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: 20,
  },
  headerLeft: {
    color: AppColors.whiteText,
    fontSize: 24,
    fontFamily: "NotoSans-SemiBold",
  },
});
