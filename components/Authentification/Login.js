import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../assets/colors/colors";
import { styles } from "./AuthentificationStyles";
import { customComponentsStyles } from "../Styles/Styles";
import { fetchLogin } from "../../redux/actions/login-actions";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector((state) => state.login.errorLogin);
  const loadingLogin = useSelector((state) => state.login.loadingLogin);
  const userLogin = useSelector((state) => state.login.token);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (userLogin) {
      navigation.navigate("BottomBar");
    }
  }, [userLogin]);

  const handleSignUp = () => {
    navigation.replace("Registration");
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email && !password) {
      setIsEmailValid(false);
      setIsPasswordValid(false);
      return;
    } else if (!email) {
      setIsEmailValid(false);
      return;
    } else if (!password) {
      setIsPasswordValid(false);
      return;
    }

    const requestBody = {
      query: `query{login(email: "${email}", password: "${password}")
      {token,tokenExpiration,userId, isHr, email, fio, about,  org , position,foto}}`,
    };

    dispatch(fetchLogin(requestBody));
  };

  if (loadingLogin) {
    return (
      <View>
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {/* {errorLogin && (
          <View>
            <Text style={{ padding: 10, fontSize: 16, color: "red" }}>
              Произошла ошибка входа, попробуйте еще раз!
            </Text>
          </View>
        )} */}
        <Text style={styles.mainLabel}>ВХОД</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={customComponentsStyles.input}
          />
          {!isEmailValid && (
            <Text style={{ padding: 10, fontSize: 8, color: "red" }}>
              Введите почту корректно
            </Text>
          )}
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
          {!isPasswordValid && (
            <Text style={{ padding: 10, fontSize: 8, color: "red" }}>
              Введите пароль
            </Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>ВОЙТИ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
