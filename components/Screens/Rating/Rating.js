import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Text, View, ScrollView } from "react-native";

import { styles } from "./RatingStyles";
//import { ratingData } from "./data";
import RatingCard from "../../helpers/ui/RatingCard/RatingCard";
import { fetchRating } from "../../../redux/actions/rating-action";

export default function Rating() {
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.login.user);
  const isManager = useSelector((state) => state.login.user.isHr);
  const ratingData = useSelector((state) => state.rating.rating);

  useEffect(() => {
   const data = [{
    id: profileData.userId,
    photo: profileData.foto ? profileData.foto :
    "https://oir.mobi/uploads/posts/2021-04/1619541027_32-oir_mobi-p-nyashnie-kotiki-zhivotnie-krasivo-foto-35.jpg",
    name: profileData.fio,
    rating:  profileData.rating ? profileData.rating :100,
   }]
    dispatch(fetchRating(isManager ?  [] : data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainLabel}>РЕЙТИНГ</Text>
      <View style={styles.headers}>
        <Text style={styles.nameHeader}>Профиль</Text>
        <Text style={styles.ratingHeader}>Рейтинг</Text>
      </View>
      <ScrollView style={styles.shopcardsContainer}>
        {ratingData.map((user, index) => {
          return (
            <View key={index}>
              <RatingCard data={user} isUsers={!isManager && index === 0} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
