import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2EC",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: "#1F3D36",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F3D36",
    marginTop: 15,
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginTop: 8,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
   label: {
    marginTop: 10,
    fontWeight: "600",
    color: "#1F3D36",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },

  input: {
    flex: 1,
    padding: 10,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 15,
  },

  checkboxText: {
    marginLeft: 8,
    flex: 1,
    fontSize: 12,
    color: "gray",
  },
  button: {
    backgroundColor: "#1F3D36",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});