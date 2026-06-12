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
  banner: {
    backgroundColor: "#1F3D36",
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#D67E3B",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 11,
  },

  bannerTitle: {
    marginTop: 15,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  bannerWeather: {
    color: "#D9D9D9",
    marginTop: 8,
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    padding: 20,

    elevation: 3,
  },

  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: "#1F3D36",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  orangeBox: {
    backgroundColor: "#F8E5D5",
  },

  cardTitle: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 24,
    color: "#1F3D36",
  },

  cardDesc: {
    marginTop: 5,
    color: "#666",
  },
  arrow: {
    alignSelf: "flex-end",
    marginTop: 10,
  },

  tipsCard: {
    backgroundColor: "#EDEFEA",
    margin: 20,
    borderRadius: 16,
    padding: 15,
  },
  tipsHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  tipsTitle: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#1F3D36",
  },

  tip: {
    marginTop: 10,
    color: "#555",
    lineHeight: 20,
  },
  bottomNav: {
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderColor: "#EEE",
  },

  navItem: {
    alignItems: "center",
  },
});