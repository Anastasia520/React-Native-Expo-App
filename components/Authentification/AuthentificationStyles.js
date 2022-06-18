import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export const styles = StyleSheet.create({
  mainLabel: {
    backgroundColor: colors.white,
    textAlign: "center",
    color: colors.turquoise,
    fontSize: 24,
    marginBottom: 48,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  inputContainer: {
    width: "80%",
  },
  hr:{
    display:'flex',
    flexDirection:'row',
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    marginBottom: 16,
    borderRadius: 50,
    borderWidth:2,
    borderColor: colors.turquoise
  },
  label: {
    color: colors.grey,
    fontSize: 15,
    marginBottom: 8,
  },
  inputPassword: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,

    borderRadius: 50,
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 50,
    borderWidth:2,
    borderColor: colors.turquoise
  },
  eyeIcon: {
    width:'20%',
    padding: 5,
    paddingRight: 10,
  },
});
