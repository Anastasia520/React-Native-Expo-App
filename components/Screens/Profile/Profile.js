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
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./ProfileStyles";
import colors from "../../../assets/colors/colors";
// import { profileData } from "./data";
import avatar from "../../../assets/avatar.jpg";
// export const FETCH_USER_INFO = gql`
// query {
//   query ($userId: string) {
//     user (
//       where: { ID: { _eq: $userId} }
//     ) {
//       FIO,
//       Org,
// 	    Position ,
// 	    About ,
//     }
//   }
// `;

// export const FETCH_RATING = gql`
// query {
//   query () {
//     rating (
//     ) {
//       FIO,
//       photo,
// 	    rating ,
//     }
//   }
// `;

// export const FETCH_SHOP = gql`
// query {
//   query () {
//     shop (
//     ) {
//       id,
//       photo,
//       cost,
//     }
//   }
// `;

// export const GET_USER = gql`
// query {
//   query ($login: string, $password: string) {
//     user (
//       where: { login: { _eq: $login}, password:{ _eq:$password } }
//     ) {
//       id,
//       FIO,
//       Org,
// 	    Position ,
// 	    About ,
//     }
//   }
// `;

// export const POST_NEW_USER = gql`
//   mutation ($login: string, $password: string) {
//     insert_event(objects: [{ name: $name, password: $password }]) {
//       returning {
//         id
//         FIO
//         Org
//         Position
//         About
//       }
//     }
//   }
// `;

// export const POST_UPDATE_USER = gql`
//   mutation ($about: string) {
//     insert_event(objects: [{ about: $about }]) {
//       returning {
//         id
//         FIO
//         Org
//         Position
//         About
//       }
//     }
//   }
// `;

// export const GET_EVENTS = gql`
// query {
//   query () {
//     events {
//       id,
//       name,
//       date ,
//     	description,
//       participants
//     }
//   }
// `;

// const INSERT_Go_EVENT = gql`
//   mutation ($id: String, $idEvent:string) {
//     insert_go_event(objects: [{ idEvent: $idEvent}] where id:$id) {
//       returning {
//         id,
//         name,
// 	      date ,
//       	description,
// 	      participants
//       }
//     }
//   }
// `;

// `mutation ($id: String) {
//   delete_go_event(where: { id: { _eq: $id } }) {
//     affected_rows
//       }
//     }`

// const BUY = gql`
//   mutation ($id: String, $idItem:string) {
//    buy: [{ idItem: $idItem}] where id:$id) {
//       returning {
//         id,
//         items
//       }
//     }
//   }
// `;

// const CHECK = gql
// `mutation ($id: String) {
// delete_check(where: { id: { _eq: $id } }) {
//   affected_rows
//   }
// }`

export default function Profile() {
  const navigation = useNavigation();
  const profileData = useSelector((state) => state.login.user);
  // const { data, error, loading } = useQuery(
  //   FETCH_USER_INFO,
  //   {
  //     variables: { userID }
  //   }
  // );
  // if (error) return <Text>Произошла ошибка</Text>;

  // if (loading) return <Text>Данные грузятся ...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.mainLabel}>ЛИЧНЫЙ КАБИНЕТ</Text>
      <View style={styles.photoContainer}>
        <View style={styles.info}>
          <Image
            style={styles.photo}
            source={{
              uri: profileData.photo
                ? profileData.foto
                : "https://oir.mobi/uploads/posts/2021-04/1619541027_32-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-35.jpg",
            }}
          />
          <View>
            <Text>Рейтинг: {profileData.rating?profileData.rating:100 }</Text>
            <Text>Баланс: {profileData.points?profileData.points :200} </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.logout}
            onPress={() => navigation.navigate("Login")}
          >
            <SimpleLineIcons name="logout" size={20} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => navigation.replace("EditProfile")}
          >
            <MaterialIcons name="edit" size={20} color={colors.white} />
          </TouchableOpacity>
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
          <Text>{profileData.org} </Text>
          <Text>{profileData.position} </Text>
        </View>
      </View>

      <View style={styles.personalInfo}>
        <Text style={styles.smallLabel}>О себе</Text>
        <View style={styles.name}>
          <Text>{profileData.about} </Text>
        </View>
      </View>
    </View>
  );
}
