import { createStackNavigator } from "@react-navigation/stack";

import LoginMainScreen from "../../../screen/LoginStackScreen/LoginMainScreen";
import LoginSuccessScreen from "../../../screen/LoginStackScreen/LoginSuccessScreen";

const Stack = createStackNavigator();
export default function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginMainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessLogin"
        component={LoginSuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
