import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "../Profile/ProfileStyles";
import colors from "../../../assets/colors/colors";
import { fetchChangeUserInfo } from "../../../redux/actions/login-actions";
//import { profileData } from "../Profile/data";

export default function EditProfile({ navigation }) {
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.login.user);
  const [info, setInfo] = useState(profileData.about);
  const [image, setImage] = useState(profileData.foto);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleChangeInfo = () => {
    const data = {
      about: info,
      email: profileData.email,
      fio: profileData.fio,
      isHr: profileData.isHr,
      org: profileData.org,
      position: profileData.position,
      token: profileData.token,
      tokenExpiration: profileData.tokenExpiration,
      userId: profileData.userId,
      foto: image,
    };

    dispatch(fetchChangeUserInfo(data))
    navigation.navigate("BottomBar", { screen: "Profile" });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainLabel}>ЛИЧНЫЙ КАБИНЕТ</Text>
      <View style={styles.photoContainer}>
        <View style={styles.info}>
          <View style={styles.editPhoto}>
            <Image
              style={styles.photo}
              source={{
                uri: image ? image : "https://oir.mobi/uploads/posts/2021-04/1619541027_32-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-35.jpg",
              }}
            />
            <TouchableOpacity style={styles.editPhotoIcon} onPress={pickImage}>
              <MaterialIcons name="edit" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View>
          <Text>Рейтинг: {profileData.rating?profileData.rating:100 }</Text>
            <Text>Баланс: {profileData.points?profileData.points :200} </Text>
          </View>
        </View>
      </View>

      <View style={styles.personalInfo}>
        <Text style={styles.smallLabel}>Личная информация</Text>
        <View style={styles.name}>
          <Text>{profileData.fio}</Text>
          {/* <Text>{profileData.birthday} </Text> */}
        </View>
      </View>

      <View style={styles.personalInfo}>
        <Text style={styles.smallLabel}>Место работы</Text>
        <View style={styles.name}>
          <Text>{profileData.org}</Text>
          <Text>{profileData.position}</Text>
        </View>
      </View>

      <View style={styles.personalInfo}>
        <Text style={styles.smallLabel}>О себе</Text>
        <View style={styles.name}>
          <TextInput
            style={styles.textInput}
            value={info}
            onChangeText={(text) => setInfo(text)}
            multiline
            numberOfLines={4}
            editable
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleChangeInfo} style={styles.button}>
          <Text style={styles.buttonText}>Сохранить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
