import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#EFEFE7",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1F3D36",
    marginRight: 24,
  },
    loginBox: {
  backgroundColor: '#1B4332',
  padding: 75,
  borderRadius: 10,
  marginTop: 10,
},
      title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  subtitle: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 22,
  },
   input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  Button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
  },
});

export default styles;