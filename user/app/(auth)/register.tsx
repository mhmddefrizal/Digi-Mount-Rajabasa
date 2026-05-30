import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "@/styles/RegisterStyle";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import Ionicons from "@expo/vector-icons/build/Ionicons";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 return (
    <View style={styles.container}>

      {/* Header Icon */}
      <View style={styles.iconContainer}>
        <Ionicons name="walk" size={40} color="white" />
      </View>