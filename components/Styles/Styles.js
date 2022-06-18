import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export const customComponentsStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    marginBottom: 16,
    borderRadius: 50,
    borderWidth:2,
    borderColor:colors.turquoise
  },
  inputPassword: {
    width:'80%',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 5,

  },
  button: {
    backgroundColor: colors.turquoise,
    width: "100%",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: colors.white,
    marginTop: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
  },
  buttonOutlineText: {
    color: colors.turquoise,
    fontSize: 15,
  },
  passwordInput: {
    flexDirection: "row",
  
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    borderRadius: 50,
    borderWidth:2,
    borderColor:colors.turquoise
  },
});
