import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Login() {
  //state untuk menyimpan username
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}