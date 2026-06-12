import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "@/styles/HomeStyle";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Ionicons
            name="menu"
            size={24}
            color="#1F3D36"
          />

          <Text style={styles.headerTitle}>
            Digi-Mount Rajabasa
          </Text>
        </View>
        {/* Greeting */}
        <Text style={styles.smallText}>
          Halo, Ketua Kelompok
        </Text>

        <Text style={styles.welcome}>
          Selamat Datang
        </Text>

        <Text style={styles.description}>
          Siap untuk petualangan berikutnya di Gunung Rajabasa?
        </Text>
}