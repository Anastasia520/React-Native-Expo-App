import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./ActivityStyles";
import { activityData } from "../../helpers/ui/ActivityCard/data";
import { needToCheckEventsData } from "../../helpers/ui/CheckCard/data";
import colors from "../../../assets/colors/colors";
import ActivityCard from "../../helpers/ui/ActivityCard/ActivityCard";
import {
  fetchEvents,
  fetchMyEvents,
} from "../../../redux/actions/events-actions";

export default function Activity() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const errorActivities = useSelector((state) => state.events.errorEvents);
  const loadingActivities = useSelector((state) => state.events.loadingEvents);
  const allActivities = useSelector((state) => state.events.events);

  const errorMyActivities = useSelector((state) => state.events.errorMyEvents);
  const loadingMyActivities = useSelector(
    (state) => state.events.loadingMyEvents
  );
  const myActivities = useSelector((state) => state.events.myEvents);

  const isManager = useSelector((state) => state.login.user.isHr);

  const [isAllEvents, setIsAllEvents] = useState(true);

  const [myEvents, setMyEvents] = useState([]);
  const [allEvents, setAllEvents] = useState(activityData);
  const [needToCheckEvents, setNeedToCheckEvents] = useState(
   []
  );

  useEffect(() => {
    // if ( !allActivities.length){
    const requestAllActivity = {
      query: `query {events{_id, title, date, description}}`,
    };
    dispatch(fetchEvents(requestAllActivity));
  // }
  }, []);

  useEffect(() => {
    if (allActivities.length) {
      const requestMyActivity = {
        query: `query{bookings{_id,user{email}, event{_id,title,date, description, }, createdAt,}}`,
      };
      dispatch(fetchMyEvents(requestMyActivity));
    }
  }, [allActivities]);

  useEffect(() => {
    if (myActivities) {
      let idsMyActivities = [];
      let myActivitiesArr = [];

      myActivities?.map((myEvent) => {
        if (!idsMyActivities.includes(myEvent.event._id)){
          idsMyActivities.push(myEvent.event._id);
          myEvent.event.go = true;
          myEvent.event.bookingId = myEvent._id;
          myActivitiesArr.push(myEvent.event);
        }
      });

      let allActivitiesArr = [...allActivities].map((event) => 
        ({
          ...event,
          go: idsMyActivities.includes(event._id) ? true : false,
          //bookingId:idsMyActivities.includes(event._id) ? true : false,
        })
      );

      let needToCheck = allActivitiesArr.filter(event => new Date (event.date)< new Date());
      setNeedToCheckEvents(needToCheck)


      setAllEvents(allActivitiesArr);
      setMyEvents( myActivitiesArr);
    }
  }, [myActivities]);

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.mainLabel}>МЕРОПРИЯТИЯ</Text>
        {isManager && (
          <TouchableOpacity
            onPress={() =>
              navigation.replace("EditActivityItem", { isNew: true })
            }
          >
            <Ionicons name="add-circle" size={24} color={colors.turquoise} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.filtersMainContainer}>
        <View style={styles.filtersContainer}>
          <TouchableOpacity onPress={() => setIsAllEvents(true)}>
            <Text
              style={isAllEvents ? styles.smallLabelActive : styles.smallLabel}
            >
              ВСЕ
            </Text>
          </TouchableOpacity>
          {isManager ? (
            <TouchableOpacity onPress={() => setIsAllEvents(false)}>
              <Text
                style={
                  !isAllEvents ? styles.smallLabelActive : styles.smallLabel
                }
              >
                ОТМЕТИТЬ
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsAllEvents(false)}>
              <Text
                style={
                  !isAllEvents ? styles.smallLabelActive : styles.smallLabel
                }
              >
                МОИ
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.activityCardsContainer}>
        {isAllEvents &&
          allEvents.map((activity, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.replace("ActivityItem", { isManager: isManager })
                }
              >
                <ActivityCard
                  isManager={isManager}
                  data={activity}
                  key={index}
                  setMyEvents={setMyEvents}
                  myEvents={myEvents}
                  allEvents={allEvents}
                  setAllEvents={setAllEvents}
                  index={index}
                />
              </TouchableOpacity>
            );
          })}

        {!isAllEvents &&
          !isManager &&
          myEvents.map((activity, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.replace("ActivityItem", { isManager: isManager })
                }
              >
                <ActivityCard
                  isManager={isManager}
                  data={activity}
                  key={index}
                  setMyEvents={setMyEvents}
                  myEvents={myEvents}
                  allEvents={allEvents}
                  setAllEvents={setAllEvents}
                  index={index}
                />
              </TouchableOpacity>
            );
          })}

        {!isAllEvents &&
          isManager &&
          needToCheckEvents.map((activity, index) => {
            return (
              <View key={index}>
                <ActivityCard
                  isManager={isManager}
                  data={activity}
                  key={index}
                  setMyEvents={setMyEvents}
                  myEvents={myEvents}
                  allEvents={allEvents}
                  setAllEvents={setAllEvents}
                  index={index}
                  checking
                  needToCheckEvents={needToCheckEvents}
                  setNeedToCheckEvents={setNeedToCheckEvents}
                />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
