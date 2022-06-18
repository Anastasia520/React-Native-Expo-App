import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../ActivityItem/ActivityItemStyles";
import colors from "../../../assets/colors/colors";
import {
  fetchChangeEvent,
  fetchCreateEvent,
  fetchEvents,
} from "../../../redux/actions/events-actions";

// const INSERT_EVENT = gql`
// //   mutation ($name: String, $description:String, $date:String) {
// //     insert_event(objects: [{ name: $name, date: $date,
// //       description:$description }]) {
// //       returning {
// //         id,
// //         name,
// // 	      date ,
// //       	description,
// // 	      participants
// //       }
// //     }
// //   }
// // `;

// const UPDATE_EVENT = gql`
//   mutation ($id: String, $name: String, $description: String, $date:String) {
//     update_event (
//       _set: {
//         name: $name,
//         description: $description,
//         date: $date
//       },
//       where: {
//         id: {
//           _eq: $id
//         }
//       }
//     ) {
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

export default function EditActivityItem({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const createEvent = useSelector((state) => state.events.createEvent);
  const isNew = route.params.isNew;

  const data = route.params.data;
  const index = route.params.index;
  const allEvents = route.params.allEvents;

  useEffect(() => {
    if (createEvent) {
      dispatch(fetchEvents);
      navigation.navigate("BottomBar", { screen: "Activity" });
    }
  }, [createEvent]);

  const [name, setName] = useState(isNew ? "" : data.title);
  const [isNameValid, setIsNameValid] = useState(true);

  const [description, setDescription] = useState(isNew ? "" : data.description);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  const [date, setDate] = useState(
    isNew ? "17.06.2022" : moment(data.date).format("DD.MM.YYYY")
  );

  // const updateCache = (client, {data: {insert_event}}) => {
  //   const data = client.readQuery({
  //     query: FETCH_EVENTS,
  //   });
  //   const newEvent =insert_event.returning[0];
  //   const newData = {
  //     events: [ newEvent, ...data.events]
  //   }
  //   client.writeQuery({
  //     query: FETCH_EVENTS,
  //     data: newData
  //   });
  // }

  // const [insertEvent, { loading, error }] = useMutation(INSERT_EVENT);

  // const submit = () => {
  //   setName("");
  //   setDescription("");
  //   setDate(new Date());
  //   insertEvent({
  //     variables: { name, description, date },
  //     update: updateCache
  //   });
  // };

  // if (error) return <Text>Произошла ошибка</Text>;

  // if (loading) return <Text>Данные грузятся ...</Text>;

  // if (insertEvent) {
  //   navigation.replace("Activity")
  // }

  // const [updateEvent, { loading, error }] = useMutation(UPDATE_EVENT);

  // const submitUpdate = () => {
  //   setName("");
  //   setDescription("");
  //   setDate(new Date());
  //   updateEvent({
  //     variables: { id, name, description, date },
  //     update: updateCache
  //   });
  // };

  const handleSave = () => {
    if (!name.length) {
      setIsNameValid(false);
    }

    if (!description.length) {
      setIsDescriptionValid(false);
    }

    if (isNew) {
      let formatDate = moment(date, "DD.MM.YYYY").format("YYYY-MM-DD");
      const requestCreate = {
        query: `mutation{createEvent(eventInput: {title: "${name}", description: "${description}", date: "${formatDate}"}){_id, title}}`,
      };
      dispatch(fetchCreateEvent(requestCreate));
    } else {
      let all = [...allEvents];
      all[index].title = name;
      all[index].description = description;
      dispatch(fetchChangeEvent(all));
      navigation.navigate("BottomBar", { screen: "Activity" });
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomBar", { screen: "Activity" })}
      >
        <Ionicons name="arrow-back" size={24} color={colors.turquoise} />
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        <View style={styles.title}>
          <View>
            <TextInput
              style={styles.name}
              value={name}
              onChangeText={(text) => setName(text)}
              editable
              placeholder="Введите название"
            />
            {!isNameValid && (
              <Text style={{ padding: 10, fontSize: 8, color: "red" }}>
                Введите название мероприятия
              </Text>
            )}
          </View>

          <Text style={styles.date}>{date}</Text>
        </View>
        <TextInput
          style={styles.text}
          value={description}
          onChangeText={(text) => setDescription(text)}
          editable
          multiline
          numberOfLines={6}
          placeholder="Введите описание"
        />
        {!isDescriptionValid && (
          <Text style={{ padding: 10, fontSize: 8, color: "red" }}>
            Введите описание мероприятия
          </Text>
        )}

        <View style={styles.footer}>
          {/* {!isNew && (
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
          )} */}

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>СОХРАНИТЬ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
