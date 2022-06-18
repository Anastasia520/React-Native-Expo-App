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
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../../../assets/colors/colors";
import { styles } from "./NewShopItemStyles";
import { fetchCreateShopItem } from "../../../../redux/actions/shop-actions";

export default function NewShopItem() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const createShopItem = useSelector((state) => state.shop.createShop);

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const [photo, setPhoto] = useState("");
  const [isPhotoValid, setIsPhotoValid] = useState(true);

  const [price, setPrice] = useState("");
  const [isPriceValid, setIsPriceValid] = useState(true);

  const handleSave = () => {
    if (!name.length) {
      setIsNameValid(false);
    }

    if (!price.length) {
      setIsPriceValid(false);
    }

    const requestBody = {
      query: `mutation{createItem(shopInput: {title: "${name}", price: "${price}", pic: "${photo}"}){_id, title, price, pic}}`,
    };

    dispatch(fetchCreateShopItem(requestBody));
  };

  useEffect(() => {
    if (createShopItem) {
      navigation.navigate("BottomBar", { screen: "Shop" });
    }
  }, [createShopItem]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomBar", { screen: "Shop" })}
      >
        <Ionicons name="arrow-back" size={24} color={colors.turquoise} />
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {/* <View style={styles.title}> */}

        <TextInput
          style={styles.name}
          value={name}
          onChangeText={(text) => setName(text)}
          editable
          placeholder="Введите название"
        />
        {!isNameValid && (
          <Text style={{ padding: 10, fontSize: 8, color: "red" }}>
            Введите название поощрения
          </Text>
        )}

        <TextInput
          value={price}
          onChangeText={(text) => setPrice(text)}
          editable
          placeholder="Введите цену"
        />
        {!isPriceValid && (
          <Text style={{ padding: 10, fontSize: 8, color: "red" }}>
            Введите цену поощрения
          </Text>
        )}

        <View style={styles.photoContainer}>
          <Text>Добавить картинку:</Text>
          <TextInput
          value={photo}
          onChangeText={(text) => setPhoto(text)}
          editable
          placeholder="Введите URL картинки"
        />
          {/* <TouchableOpacity style={styles.editPhotoIcon} onPress={pickImage}>
            <MaterialIcons name="edit" size={15} color={colors.white} />
          </TouchableOpacity> */}
        </View>

        {photo && (
          <Image
            style={styles.photo}
            source={{
              uri: photo,
            }}
          />
        )}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>СОХРАНИТЬ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
