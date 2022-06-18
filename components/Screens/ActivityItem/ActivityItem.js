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
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./ActivityItemStyles";
import colors from "../../../assets/colors/colors";



// `"query": "query{bookingsEvent{user, event}}"`
  
export default function ActivityItem({ route }) {
  const navigation = useNavigation();

  const isManager = route.params.isManager;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomBar", { screen: "Activity" })}
      >
        <Ionicons name="arrow-back" size={24} color={colors.turquoise} />
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        <View style={styles.title}>
          <Text style={styles.name}>Пикник</Text>
          <Text style={styles.date}>22.04.22</Text>
        </View>
        <Text style={styles.text} >
          300 Б
        </Text>
        <Text style={styles.text} numberOfLines={10}>
          Пикник с веселыми играми на берегу Камы. Будет весело!
        </Text>
        <View style={styles.footer}>
          <View>
            <Text style={styles.participants}>Участников: 8</Text>
            <View style={styles.avatars}>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://oir.mobi/uploads/posts/2021-04/1619541027_32-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-35.jpg",
                }}
              />
              <Image
                style={styles.photo}
                source={{
                  uri: "https://oir.mobi/uploads/posts/2021-04/1619541027_32-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-35.jpg",
                }}
              />
              <Image
                style={styles.photo}
                source={{
                  uri: "https://oir.mobi/uploads/posts/2021-04/1619541027_32-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-35.jpg",
                }}
              />
              <Text>+ 5</Text>
            </View>
          </View>
          {isManager ? (
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("EditActivityItem",{ isNew: false })}
              >
                <Text style={styles.buttonText}>ИЗМЕНИТЬ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.buttonText}>ОТМЕНИТЬ</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ИДУ</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
