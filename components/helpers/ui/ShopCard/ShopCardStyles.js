import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors/colors";

export const styles = StyleSheet.create({
  photo: {
    width: "50%",
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  photoAvatar: {
    width: 24,
    height: 24,
    borderRadius: 50,
    marginRight: 16,
  },
  line: {
    width: 1,
    backgroundColor: colors.grey,
    height: "80%",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
  },
  smallText: {
    fontSize: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
    //boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: colors.green,
    marginTop: 8,
    padding: 6,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    width:'80%',
    justifyContent: "center",
    alignItems: "center",
  },
  disabled:{
    backgroundColor: colors.grey,
    marginTop: 8,
    padding: 6,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    width:'80%',
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
  },
  infoContainers: {
    alignContent: "center",
    textAlign: "center",
    display: "flex",
    width:'50%',
    flexDirection: "column",
    justifyContent: 'flex-end',
  },
});
