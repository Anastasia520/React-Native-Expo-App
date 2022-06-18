import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../assets/colors/colors";
import Activity from "../Screens/Activity/Activity";
import Profile from "../Screens/Profile/Profile";
import Shop from "../Screens/Shop/Shop";
import Rating from "../Screens/Rating/Rating";

export default function BottomBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={"Activity"}
      tabBarOptions={{
        activeTintColor: colors.turquoise,
        inactiveTintColor: colors.grey,
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Shop") {
            iconName = focused ? "shopping" : "shopping-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size}
              />
            );
          } else if (rn === "Profile") {
            iconName = focused ? "user-alt" : "user";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          } else if (rn === "Activity") {
            iconName = focused ? "calendar" : "calendar-o";
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (rn === "Rating") {
            iconName = focused ? "star" : "staro";
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Rating"
        component={Rating}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
