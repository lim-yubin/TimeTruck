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
export default function TruckState({ num }) {
  let obj = { 1: "복귀중", 2: "작업중", 3: "하역중" };
  let color = {
    1: "rgba(255, 165, 0, 0.3)",
    2: "rgba(0, 128, 0, 0.3)",
    3: "rgba(255, 99, 71, 0.3)",
  };
  return (
    <View style={[css.container, { backgroundColor: color[num] }]}>
      <View style={css.textWrapper}>
        <Text style={css.truckNum}>서울 28가 2929</Text>
        <Text style={css.truckSate}>{obj[num]}</Text>
      </View>
    </View>
  );
}
const css = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    height: 100,
    // backgroundColor: AppColors.lightGray,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  truckNum: {
    fontFamily: "NotoSans-SemiBold",
    fontSize: 20,
    // borderWidth: 1,
    // height: 30,
  },
  truckSate: {
    fontFamily: "NotoSans-SemiBold",
    fontSize: 20,
    // borderWidth: 1,
    // height: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inner: {
    borderWidth: 1,
  },
});
