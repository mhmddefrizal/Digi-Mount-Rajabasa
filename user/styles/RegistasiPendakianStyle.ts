import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F0",
    padding: 15,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
   headerTitle: {
    marginLeft: 10,
    color: "#1F3D36",
    fontWeight: "700",
  },

  stepRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stepText: {
    color: "#D67E3B",
    fontWeight: "600",
  },

  stepTitle: {
    color: "#1F3D36",
    fontWeight: "700",
  },
   banner: {
    backgroundColor: "#2F5D50",
    borderRadius: 16,
    padding: 20,
    marginTop: 15,
  },

  bannerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },

  bannerDesc: {
    color: "white",
    marginTop: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
  },

  label: {
    marginTop: 10,
    marginBottom: 8,
    fontWeight: "600",
    color: "#1F3D36",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    padding: 12,
  },