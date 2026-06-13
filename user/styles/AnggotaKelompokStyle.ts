import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F2",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 55,
    paddingBottom: 15,
    backgroundColor: "#FFF",
  },

  headerTitle: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#1F3D36",
  },
  stepContainer: {
    padding: 16,
  },

  stepLabel: {
    fontSize: 12,
    color: "#777",
  },

  stepRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F3D36",
  },

  stepBadge: {
    backgroundColor: "#CDEBCF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  stepBadgeText: {
    color: "#1F3D36",
    fontWeight: "600",
  },