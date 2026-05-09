import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#EFEFE7",
    padding: 20,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F2',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#486357',
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