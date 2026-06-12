import { StyleSheet } from "react-native";

export default StyleSheet.create({\
    container: {
    flex: 1,
    backgroundColor: "#F4F5F0",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 55,
  },
  headerTitle: {
    marginLeft: 10,
    fontWeight: "700",
    color: "#1F3D36",
  },

  smallText: {
    marginTop: 25,
    marginHorizontal: 20,
    color: "gray",
    fontSize: 12,
  },
   welcome: {
    marginHorizontal: 20,
    fontSize: 34,
    fontWeight: "bold",
    color: "#1F3D36",
  },

  description: {
    marginHorizontal: 20,
    marginTop: 5,
    color: "#555",
  },
});