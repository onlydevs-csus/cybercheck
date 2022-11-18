import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signin from "./src/screens/SignIn";
import RecentReportsScreen from "./src/screens/RecentReports";
<<<<<<< HEAD
import ReportTasks from "./src/screens/ReportTasks";
=======
import ManageAccount from "./src/screens/ManageAccount";

>>>>>>> c3487fd15757ccad82c16e1d93873e2f65ccf2c6

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={Signin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RecentReportsTab"
            component={RecentReportsScreen}
            options={{
              headerShown: false,
              gestureEnabled: true
            }}
          />
          <Stack.Screen
            name="ManageAccount"
            component={ManageAccount}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ReportTasks"
            component={ReportTasks}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
