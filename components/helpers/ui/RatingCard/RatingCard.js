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

import { styles } from "./RatingCardStyles";
export default function RatingCard({ isUsers, data }) {
  return (
    <View style={isUsers ? styles.containerUsers : styles.container}>
      <View style={styles.nameContainer}>
        <Image
          style={styles.photo}
          source={{
            uri: data?.photo,
          }}
        />
        <Text>{data?.name}</Text>
      </View>

      <Text style={styles.rating}>{data?.rating}</Text>
    </View>
  );
}
