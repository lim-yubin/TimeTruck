import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import HomeScreen from "../../../screen/BottomTabScreen/HomeStackScreens/HomeScreen";
import AppColors from "../../../constants/AppColors";
const Stack = createStackNavigator();
const width = Dimensions.get("screen").width;
// const height = Dimensions.get("window").;

export default function StateChangeScreen() {
  return (
    <View style={css.container}>
      <View style={css.textBox}>
        <Text style={css.text}>미도정업 서울 23바 3939</Text>
        <Text style={css.text}>기사님 오늘도 안전운전하세요</Text>
      </View>
      <View style={css.buttonBox}>
        <TouchableOpacity style={css.button}>
          <Text style={css.buttonText}>작업 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    position: "relative",
    width: width,
    height: "100%",
    backgroundColor: AppColors.background,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textBox: {
    paddingBottom: 100,
    paddingHorizontal: 50,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // borderWidth: 1,
  },
  text: {
    fontWeight: "bold",
    fontFamily: "NotoSans-SemiBold",
    fontSize: 24,
    color: AppColors.whiteText,
  },
  buttonBox: {
    paddingHorizontal: 23,
    width: width,
    position: "absolute",
    bottom: 24,
  },
  button: {
    borderRadius: 5,
    height: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.dark,
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "NotoSans-SemiBold",
    color: AppColors.whiteText,
  },
});
