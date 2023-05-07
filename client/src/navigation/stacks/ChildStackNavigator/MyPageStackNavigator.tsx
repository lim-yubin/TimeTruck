import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import MyPageScreens from "../../../screen/BottomTabScreen/MyPageStackScreens/MyPageScreens";
const Stack = createStackNavigator();
export default function MyPageStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        options={{
          headerShown: false,
        }}
        component={MyPageScreens}
      />
    </Stack.Navigator>
  );
}
