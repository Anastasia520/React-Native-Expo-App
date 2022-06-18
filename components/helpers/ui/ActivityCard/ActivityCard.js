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

import { styles } from "./ActivityCardStyles";
import {
  fetchGoEvent,
  fetchEvents,
  fetchCancelBookingEvent,
  fetchDeleteEvent,
} from "../../../../redux/actions/events-actions";

// const REMOVE_EVENT = gql`
//   mutation ($id: String) {
//     delete_event(where: { id: { _eq: $id } }) {
//       affected_rows
//     }
//   }
// `;

export default function ActivityCard({
  isManager,
  data,
  setMyEvents,
  myEvents,
  index,
  allEvents,
  setAllEvents,
  checking,
  needToCheckEvents,
  setNeedToCheckEvents,
}) {
  // const [deleteEvent, { loading: deleting, error: deleteError }] =
  //   useMutation(REMOVE_EVENT);

  // const deleteButton = () => {
  //   const updateCache = (client) => {
  //     const data = client.readQuery({
  //       query: FETCH_EVENTS,
  //     });
  //     const newData = {
  //       todos: data.events.filter((t) => t.id !== item.id),
  //     };
  //     client.writeQuery({
  //       query: FETCH_EVENTS,

  //       data: newData,
  //     });
  //   };

  //   const remove = () => {
  //     if (deleting) return;
  //     deleteEvent({
  //       variables: { id: item.id },
  //       update: updateCache,
  //     });
  //   };

  //   return (
  //     <View style={styles.deleteButton}>
  //       <TouchableOpacity
  //         style={styles.button}
  //         onPress={remove}
  //         disabled={deleting}
  //       >
  //         <Text style={styles.buttonText}>ИДУ</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  // if (deleteError) {
  //   <Text>При удалении произошла ошибка </Text>
  // }
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isGo = data?.go;

  const d = new Date(data.date);

  const date = moment(d).format("DD.MM.YYYY");

  const goOnEvent = () => {
    const requestGoActivity = {
      query: `mutation{bookEvent(eventId: \"${data._id}\"){_id, createdAt, user{email}}}`,
    };
    dispatch(fetchGoEvent(requestGoActivity));

    const requestAllActivity = {
      query: `query {events{_id, title, date, description}}`,
    };
    dispatch(fetchEvents(requestAllActivity));

    // let newMyEvents = [...myEvents];

    // let newData = data;
    // newData.go = true;
    // newMyEvents.push(newData);

    // let newAllEvents = [...allEvents];
    // newAllEvents[index].go = true;

    // setAllEvents(newAllEvents);
    // setMyEvents(newMyEvents);
  };

  const cancelEvent = () => {
    const requestCancelBookingActivity = {
      query: `mutation{cancelBooking(bookingId: \"${data.bookingId}\"){_id}}`,
    };
    dispatch(fetchCancelBookingEvent(requestCancelBookingActivity));

    const requestAllActivity = {
      query: `query {events{_id, title, date, description}}`,
    };
    dispatch(fetchEvents(requestAllActivity));

    // let newMyEvents = [...myEvents];
    // let filtered = newMyEvents.filter((event) => event.id != data.id);
    // setMyEvents(filtered);

    // let newAllEvents = [...allEvents];
    // newAllEvents[index].go = false;

    // setAllEvents(newAllEvents);
  };

  const deleteEvent = () => {
    let all = [...allEvents].filter(event => event._id != data._id)
      dispatch(fetchDeleteEvent(all));
      navigation.navigate("BottomBar", { screen: "Activity" });
  }

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text>{data.title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text numberOfLines={3} style={styles.description}>
        {data.description}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.participants}>
          {/* Участников: {data.participants.count} */}
        </Text>
        {isManager && !checking && new Date(data.date) > new Date()  && (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.replace("EditActivityItem", { isNew: false, data:data, allEvents: allEvents, index:index})
              }
            >
              <Text style={styles.buttonText}>ИЗМЕНИТЬ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={deleteEvent}>
              <Text style={styles.buttonText}>ОТМЕНИТЬ</Text>
            </TouchableOpacity>
          </View>
        )}

        {isManager && checking  && (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("CheckUsers",{ data: data })}
            >
              <Text style={styles.buttonText}>ОТМЕТИТЬ УЧАСТНИКОВ</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isManager && !isGo && new Date(data.date) >= new Date() &&  (
          <TouchableOpacity style={styles.button} onPress={goOnEvent}>
            <Text style={styles.buttonText}>ИДУ</Text>
          </TouchableOpacity>
        )}

        {!isManager && isGo && new Date(data.date) >= new Date() &&(
          <TouchableOpacity style={styles.cancelButton} onPress={cancelEvent}>
            <Text style={styles.buttonText}>НЕ ИДУ</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
