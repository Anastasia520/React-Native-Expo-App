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

import { styles } from "./ShopCardStyles";

export default function ShopCard({ data, balance, setBalance }) {
  const [isBought, setIsBought] = useState(false);

  const buyItem = () => {
    let newBalance = balance - data.price;
    if (newBalance > -1) {
      setBalance(newBalance);
      setIsBought(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: `${data.pic}` }} />
      <View style={styles.infoContainers}>
        <Text>{data.title}</Text>
        <Text>{data.price} Б</Text>
        <TouchableOpacity
          style={(isBought || balance<data.price )? styles.disabled : styles.button}
          onPress={buyItem}
          disabled={isBought}
        >
          <Text style={styles.buttonText}>ОБМЕНЯТЬ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
