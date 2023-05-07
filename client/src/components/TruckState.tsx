import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AppColors from "../constants/AppColors";
export default function TruckState() {
  return <View style={css.container}></View>;
}
const css = StyleSheet.create({
  container: {
    width: 170,
    height: 100,
    backgroundColor: AppColors.dark,
    borderRadius: 5,
    marginBottom: 15,
  },
});
