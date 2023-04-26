import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image } from "react-native";

import BottomTabNavigator from "./stacks/ParentStackNavigator/BottomTabNavigator";
// import HomeStackNavigation from "./stacks/HomeStackNavigation";
import LoginStackNavigator from "./stacks/ParentStackNavigator/LoginStackNavigator";
// import MyPageStackNavigation from "./stacks/MyPageStackNavigation";
// import UploadStackNavigation from "./stacks/UploadStackNavigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginRoot"
        component={LoginStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

function NotFoundScreen() {
  return (
    <View>
      <Text>Page Not found</Text>
    </View>
  );
}
