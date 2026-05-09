import styles from "@/styles/LoginStyle";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Login() {
  //state untuk menyimpan username
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
        <View style={styles.Button}>
        <Text style={styles.Button}>Login</Text>
        </View>
      </View>
    </View>
  );
}