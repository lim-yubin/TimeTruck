import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import HomeScreen from "../../../screen/BottomTabScreen/HomeStackScreens/HomeScreen";
const Stack = createStackNavigator();
export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={HomeScreen} />
    </Stack.Navigator>
  );
}
