import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

export default function LoginSuccessScreen({ navigation }: any) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>로그인 성공</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
