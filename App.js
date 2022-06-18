import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import store from "./store";
import Login from "./components/Authentification/Login";
import Registration from "./components/Authentification/Registration";
import ActivityItem from "./components/Screens/ActivityItem/ActivityItem";
import BottomBar from "./components/BottomBar/BottomBar";
import EditProfile from "./components/Screens/EditProfile/EditProfile";
import EditActivityItem from "./components/Screens/EditActivityItem/EditActivityItem";
import CheckUsers from "./components/Screens/CheckUsers/CheckUsers";
import NewShopItem from "./components/helpers/ui/NewShopItem/NewShopItem";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="CheckUsers" component={CheckUsers} />
          <Stack.Screen name="BottomBar" component={BottomBar} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="ActivityItem" component={ActivityItem} />
          <Stack.Screen name="EditActivityItem" component={EditActivityItem} />
          <Stack.Screen name="NewShopItem" component={NewShopItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
