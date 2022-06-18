import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  CheckBox,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../assets/colors/colors";
import { styles } from "./AuthentificationStyles";
import { customComponentsStyles } from "../Styles/Styles";
import {
  fetchRegistration
} from "../../redux/actions/registration-actions";
import { fetchLogin } from "../../redux/actions/login-actions";

const Registration = () => {
  const dispatch = useDispatch();
  const errorRegistration = useSelector(
    (state) => state.registration.errorRegistration
  );
  const loadingRegistration = useSelector(
    (state) => state.registration.loadingRegistration
  );
  const userRegistration = useSelector((state) => state.registration.user);
  const userLogin = useSelector((state) => state.login.token);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isHr, setIsHr] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const requestLogin = {
      query: `query{login(email: "${email}", password: "${password}")
      {token,tokenExpiration,userId, isHr, email, fio, about,  org , position, }}`,
    };

    dispatch(fetchLogin(requestLogin));
  }, [userRegistration]);

  useEffect(() => {
    if (userLogin) {
      navigation.navigate("BottomBar");
    }
  }, [userLogin]);

  const handleSignUp = (event) => {
    event.preventDefault();

    if (!email || !password || !name || !job) {
      return;
    }

    const requestBody = {
      query: `mutation{
        createUser(userInput: {email: "${email}", password: "${password}", rating:"0", points:"0",  fio: "${name}", org: "DeskAlerts", position: "${job}", isHr: ${isHr},})
        {_id, email, rating,  points,  fio, org,  position, isHr }}`,
    };

    // fetch("http://192.168.0.5:3000/graphql", {
    //   method: "POST",
    //   body: JSON.stringify(requestBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     if (res.status !== 200 && res.status !== 201) {
    //       throw new Error("Что-то пошло не так");
    //     }
    //     return res.json();
    //   })
    //   .then((resData) => console.log(resData))
    //   .catch((err) => console.log(err));
    dispatch(fetchRegistration(requestBody));
  };
  if (loadingRegistration) {
    <View>
      <Text>Загрузка...</Text>
    </View>;
  }

  if (errorRegistration) {
    <View>
      <Text>Произошла ошибка регистрации</Text>
    </View>;
  }

  return (
    <>
      <View></View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.mainLabel}>РЕГИСТРАЦИЯ</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={customComponentsStyles.input}
          />
          {/* <Text style={{ padding: 4, fontSize: 8, color: "red" }}>
            Введите почту
          </Text> */}
          <Text style={styles.label}>ФИО</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={customComponentsStyles.input}
          />
          {/* <Text style={{ padding: 4, fontSize: 8, color: "red" }}>
            Введите ФИО
          </Text> */}
          <Text style={styles.label}>Должность</Text>
          <TextInput
            value={job}
            onChangeText={(text) => setJob(text)}
            style={customComponentsStyles.input}
          />
          {/* <Text style={{ padding: 4, fontSize: 8, color: "red" }}>
            Введите должность
          </Text> */}
          <View style={styles.hr}>
            <CheckBox value={isHr} onValueChange={() => setIsHr(!isHr)} />
            <Text style={styles.label}>
              Вы являетесь сотрудником HR отдела ?
            </Text>
          </View>
          <Text style={styles.label}>Пароль</Text>
          <View style={customComponentsStyles.passwordInput}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={customComponentsStyles.inputPassword}
              secureTextEntry={!showPassword}
            />
            {showPassword ? (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  name="eye-off"
                  style={styles.eyeIcon}
                  size={24}
                  color={colors.grey}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  name="eye"
                  style={styles.eyeIcon}
                  size={24}
                  color={colors.grey}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>ЗАРЕГИСТРИРОВАВАТЬСЯ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Войти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default Registration;
