import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

export const styles = StyleSheet.create({
  photo: {
    width: 70,
    height: 70,
    borderRadius:50,
    marginRight: 16,
  },
  container: {
    padding: 36,
    paddingBottom: 0,
    height: "100%",
    backgroundColor: colors.white,
  },
  addContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent:'center',
    alignItems: "center",
  },
  mainLabel: {
    textAlign: "center",
    color: colors.turquoise,
    fontSize: 24,
    marginBottom: 36,
  },
  activityCardsContainer: {
    marginTop: 16,
  },
  photoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  smallLabel: {
    fontWeight: "400",
    fontSize: 15,
    color: colors.turquoise,
    marginLeft: 8,
    marginRight: 8,
  },
  mr: {
    marginRight: 8,
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  filtersMainContainer: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  smallLabelActive: {
    fontWeight: "700",
    fontSize: 15,
    color: colors.turquoise,
    textDecorationLine: "underline",
  },
  logout: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: colors.orange,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  edit: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: colors.turquoise,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  personalInfo: {
    marginTop: 24,
  },
  textInput: {
    padding: 10,
    borderRadius: 8,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 36,
  },
  button: {
    backgroundColor: colors.green,
    width: "100%",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
  },
});
