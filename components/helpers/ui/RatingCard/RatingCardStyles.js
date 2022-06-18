import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors";

export const styles = StyleSheet.create({
  photo: {
    width: 24,
    height: 24,
    borderRadius: 50,
    marginRight: 16,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
  },
  containerUsers: {
    borderColor: colors.orange,
    backgroundColor: colors.lightOrange,
    borderRadius: 8,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
  },
  rating: {
    width: "30%",
    textAlign: "center",
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "70%",
  },
  button: {
    backgroundColor: colors.green,
    marginTop: 8,
    padding: 6,
    borderRadius: 50,
    alignItems: "center",
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
