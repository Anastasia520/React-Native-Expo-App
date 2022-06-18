import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { styles } from "./CheckCardStyles";
export default function CheckCard({ user, users,setUsers }) {
  const handleCheck = () => {
    let newUsers = [...users].filter(u => u.id !=user.id);
    setUsers(newUsers)
  }
  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <View style={styles.infoContainers}>
        <TouchableOpacity style={styles.button} onPress={handleCheck}>
          <Text style={styles.buttonText}>ПОСЕТИЛ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>НЕ ПОСЕТИЛ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
