import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AppColors from "../../../constants/AppColors";
import TruckState from "../../../components/TruckState";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={css.container}>
        <View style={css.header}>
          <View style={css.working}>
            <Text style={css.label}>작업중</Text>
            <Text style={css.value}>22대</Text>
          </View>
          <View style={css.goBack}>
            <Text style={css.label}>복귀중</Text>
            <Text style={css.value}>17대</Text>
          </View>
          <View style={css.unLoading}>
            <Text style={css.label}>하역중</Text>
            <Text style={css.value}>12대</Text>
          </View>
        </View>
        <View style={css.inner}>
          <TruckState num={1} />
          <TruckState num={2} />
          <TruckState num={2} />
          <TruckState num={1} />
          <TruckState num={3} />
          <TruckState num={3} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: AppColors.lightGray,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  working: {
    width: "30%",
    height: 70,
    // borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  goBack: {
    width: "30%",
    height: 70,
    // borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  unLoading: {
    width: "30%",
    height: 70,
    // borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
  label: {
    fontFamily: "NotoSans-SemiBold",
    fontSize: 20,
  },
  value: {
    fontFamily: "NotoSans-SemiBold",
    fontSize: 26,
  },

  inner: {
    // borderWidth: 1,
  },
});
