import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AppColors from "../../constants/AppColors";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function LoginMainScreen({ navigation }: any) {
  // const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={css.container}>
          <View style={css.circle1} />
          <View style={css.circle2} />
          <View style={css.inner}>
            <View style={css.loginBox}>
              <View>
                <View style={css.loginInput}>
                  <TextInput
                    placeholder="차량번호를 입력하세요"
                    style={css.truckNum}
                  />
                </View>
                <View style={css.loginInput}>
                  <TextInput
                    placeholder="사내번호를 입력하세요"
                    style={css.companyNum}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={css.loginButton}
                onPress={() => {
                  navigation.replace("Root");
                }}
              >
                <Text style={css.loginText}>시작하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const css = StyleSheet.create({
  container: {
    backgroundColor: AppColors.main,
    width: width,
    height: height,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  circle1: {
    position: "absolute",
    zIndex: 1,
    top: "-5%",
    left: "-10%",
    backgroundColor: AppColors.sub,
    width: width / 1.2,
    height: width / 1.2,
    borderRadius: width / 1.2 / 2,
  },
  circle2: {
    position: "absolute",
    zIndex: 0,
    top: "-5%",
    right: "-5%",
    backgroundColor: AppColors.background,
    width: width / 2,
    height: width / 2,
    borderRadius: width / 2 / 2,
  },
  inner: {
    // borderWidth: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  appNameBox: {
    borderWidth: 1,
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontFamily: "NotoSans-SemiBold",
    fontSize: 36,
    fontWeight: "bold",
    color: AppColors.lightGray,
  },
  loginBox: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    // borderWidth: 1,
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  loginInput: {
    // borderWidth: 1,
    height: 62,
    borderRadius: 10,
    marginBottom: 24,
    backgroundColor: AppColors.lightGray,
    padding: 5,
  },
  truckNum: {
    // borderWidth: 1,
    height: "100%",
    fontFamily: "NotoSans-Regular",
    fontSize: 24,
    textAlign: "center",
  },
  companyNum: {
    // borderWidth: 1,
    height: "100%",
    fontFamily: "NotoSans-Regular",
    fontSize: 24,
    textAlign: "center",
  },
  loginButton: {
    // borderWidth: 1,
    height: 72,
    borderRadius: 50,
    backgroundColor: AppColors.sub,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    textAlign: "center",
    color: AppColors.lightGray,
    fontFamily: "NotoSans-SemiBold",
    fontSize: 24,
  },
});
