import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { styles } from "./ShopCardStyles";
import { fetchCheckItem, fetchGetCheckItem } from "../../../../redux/actions/shop-actions";

export default function ShopCardManager({data}) {
  const dispatch = useDispatch();

  const handleCheck = () => {
dispatch(fetchCheckItem(data.id));
dispatch(fetchGetCheckItem())
  }
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Image
          style={styles.photoAvatar}
          source={{ uri: data.photo}}
        />
        <View>
          <Text>{data.name}</Text>
          <Text style={styles.smallText}>{data.position}</Text>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.infoContainers}>
        <Text>{data.item}</Text>
        <TouchableOpacity style={styles.button} onPress={handleCheck}>
          <Text style={styles.buttonText}>ВРУЧЕНО</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
