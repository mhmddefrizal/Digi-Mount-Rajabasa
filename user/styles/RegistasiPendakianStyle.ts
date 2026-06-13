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
  row: {
    flexDirection: "row",
    gap: 10,
  },

  routeCard: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 12,
  },

  routeTitle: {
    fontWeight: "700",
    marginTop: 5,
  },

  routeDesc: {
    color: "gray",
    fontSize: 12,
  },
  typeRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },

  activeType: {
    flex: 1,
    backgroundColor: "#B9E3C6",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },

  activeTypeText: {
    color: "#1F3D36",
    fontWeight: "700",
  },

  typeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
   warningBox: {
    marginTop: 15,
    backgroundColor: "#FFF1E5",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
  },

  warningText: {
    flex: 1,
    marginLeft: 10,
    color: "#A85A14",
    fontSize: 12,
  },
  nextButton: {
    backgroundColor: "#1F3D36",
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  nextText: {
    color: "white",
    fontWeight: "700",
  },
});