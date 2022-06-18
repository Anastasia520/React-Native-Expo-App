import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,

    height: "100%",
    padding: 36,
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    //boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    height: "95%",
  },
  backbtn:{
    display: "flex",
    flexDirection: "row",
    fontSize:24,
    width:'100%'
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontWeight: "700",
  },
  date: {
    fontSize: 10,
    fontWeight: "700",
  },
  text: {
    fontSize: 10,
    color: colors.grey,
    flexGrow: 1,
  },

  photo: {
    width: 24,
    height: 24,
    borderRadius:50,
    marginRight: 4,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    fontSize: 10,
  },
  description: {
    fontSize: 10,

    color: colors.grey,
    marginBottom: 8,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  participants: {
    fontSize: 10,
    color: colors.turquoise,
  },
  avatars: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.green,
    marginTop: 8,
    padding: 6,
    //width: "fit-content",
    borderRadius: 50,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: colors.orange,
    marginTop: 8,
    padding: 6,
   // width: "fit-content",
    borderRadius: 50,
    alignItems: "center",
    marginLeft: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
  },
  infoContainers: {
    alignContent: "center",
    textAlign: "center",
  },
});
