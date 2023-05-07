import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import StackChangeScreen from "../../../screen/BottomTabScreen/StateChangeStackScreens/StateChangeScreen";
const Stack = createStackNavigator();
export default function StateChangeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="State"
        options={{
          headerShown: false,
        }}
        component={StackChangeScreen}
      />
    </Stack.Navigator>
  );
}
