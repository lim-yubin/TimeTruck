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
export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView>
      <ScrollView style={css.container}>
        <View style={css.header}>
          <View style={css.titleBox}>
            <Text style={css.title}>트럭현황</Text>
          </View>
          <View style={css.contentBox}>
            <View style={css.contentTextBox}>
              <Text style={css.contentText}>작업중</Text>
              <Text style={css.contentText}>25대</Text>
            </View>
            <View style={css.divider} />
            <View style={css.contentTextBox}>
              <Text style={css.contentText}>하역중</Text>
              <Text style={css.contentText}>10대</Text>
            </View>
          </View>
        </View>
        <View style={css.sortContainer}>
          <TouchableOpacity style={{ padding: 1 }}>
            <Text style={css.sortText}>작업중</Text>
          </TouchableOpacity>
        </View>
        <View style={css.inner}>
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
          <TruckState />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: AppColors.background,
  },
  header: {
    backgroundColor: AppColors.dark,
    height: 169,
    borderRadius: 5,
    marginBottom: 33,
    padding: 13,
  },
  titleBox: {
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    color: AppColors.whiteText,
    fontFamily: "NotoSans-SemiBold",
  },
  contentBox: {
    height: 73,
    borderColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentTextBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentText: {
    color: AppColors.whiteText,
    fontFamily: "NotoSans-SemiBold",
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.whiteText,
  },
  sortContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 20,
    width: "100%",
    marginBottom: 15,
  },
  sortText: {
    fontSize: 16,
    fontFamily: "NotoSans-SemiBold",
    color: AppColors.whiteText,
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // borderWidth: 1,
    justifyContent: "space-between",
  },
});
