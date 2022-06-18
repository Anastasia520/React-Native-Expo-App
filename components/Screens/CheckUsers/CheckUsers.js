import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../ActivityItem/ActivityItemStyles";
import { usersToCheck } from "./data";
import colors from "../../../assets/colors/colors";
import CheckCard from "../../helpers/ui/CheckCard/CheckCard";

export default function CheckUsers({route}) {
  const data = route.params.data;
  const [users, setUsers] = useState(usersToCheck)
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backbtn}>
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomBar", { screen: "Activity" })}
      >
        <Ionicons name="arrow-back" size={24} color={colors.turquoise} />
      </TouchableOpacity>
      <Text>{data.title}</Text>
      </View>
      <ScrollView style={styles.activityCardsContainer}>
        {users.map((user, index) => {
          return <CheckCard user={user} users={users} setUsers = {setUsers} key={user.id} />;
        })}
      </ScrollView>
    </View>
  );
}
