import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./ShopStyles";
import colors from "../../../assets/colors/colors";
import { shopData } from "../../helpers/ui/ShopCard/data";
import ShopCard from "../../helpers/ui/ShopCard/ShopCard";
import ShopCardManager from "../../helpers/ui/ShopCard/ShopCardManager";
import {
  fetchGetCheckItem,
  fetchShop,
} from "../../../redux/actions/shop-actions";

export default function Shop({ navigation }) {
  const dispatch = useDispatch();

  const isManager = useSelector((state) => state.login.user.isHr);
  const shopItems = useSelector((state) => state.shop.shop);

  const checks = useSelector((state) => state.shop.checkItems);

  const [balance, setBalance] = useState(200);
  const [shop, setShop] = useState([]);

  useEffect(() => {
    if (!isManager) {
      const requestShop = {
        query: `query{shop{_id, title, price, pic}}`,
      };
      dispatch(fetchShop(requestShop));
    } else {
      dispatch(fetchGetCheckItem());
    }
  }, []);

  useEffect(() => {
    if (shopItems.length) {
      setShop(shopItems);
    }
  }, [shopItems]);

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.mainLabel}>МАГАЗИН</Text>
        {isManager && (
          <TouchableOpacity onPress={() => navigation.replace("NewShopItem")}>
            <Ionicons name="add-circle" size={24} color={colors.turquoise} />
          </TouchableOpacity>
        )}
      </View>

      {isManager ? (
        <>
          <Text>Текущие заявки на выдачу поощрений</Text>
          <ScrollView style={styles.shopcardsContainer}>
            {checks.map((item) => (
              <View key={item.id}>
                <ShopCardManager data={item} />
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        <>
          <Text>Баланс: {balance}</Text>

          <ScrollView style={styles.shopcardsContainer}>
            {shop.map((shop, index) => {
              return (
                <ShopCard
                  data={shop}
                  key={index}
                  balance={balance}
                  setBalance={setBalance}
                />
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
}
