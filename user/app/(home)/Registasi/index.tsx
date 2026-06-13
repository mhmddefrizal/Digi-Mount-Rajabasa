import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "@/styles/RegistrasiPendakianStyle";

export default function RegistrasiPendakian() {
  const [tanggal, setTanggal] = useState("");
   return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={22}
          color="#1F3D36"
        />

        <Text style={styles.headerTitle}>
          Digi-Mount Rajabasa
        </Text>
      </View>
}