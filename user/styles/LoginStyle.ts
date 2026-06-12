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
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1F3D36",
    marginRight: 24,
  },
  loginBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,

    elevation: 5,
  },
  loginButton: {
  backgroundColor: "#1F3D36",
  height: 50,
  borderRadius: 12,

  justifyContent: "center",
  alignItems: "center",
},
loginButtonText: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#1F3D36",
  },
  subtitle: {
    textAlign: "center",
    color: "#1F3D36",
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 22,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  label: {
    marginBottom: 8,
    color: "#1F3D36",
    fontWeight: "600",
  },
  forgot: {
    textAlign: "right",
    color: "#1F3D36",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CFCFCF",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "gray",
  },
  register: {
    textAlign: "center",
    color: "gray",
  },
  registerBold: {
    fontWeight: "bold",
    color: "#1F3D36",
  },

  Button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
  },
});

export default styles;
