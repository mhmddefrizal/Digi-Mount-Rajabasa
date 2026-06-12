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
        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Status Kawasan
            </Text>
          </View>

          <Text style={styles.bannerTitle}>
            Jalur Pendakian Dibuka
          </Text>

          <Text style={styles.bannerWeather}>
            ☀ Cuaca Cerah • 24°C
          </Text>
        </View>
        {/* Registrasi */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons
              name="walk"
              size={24}
              color="white"
            />
          </View>
           {/* Riwayat */}
        <TouchableOpacity style={styles.card}>
          <View
            style={[
              styles.iconBox,
              styles.orangeBox,
            ]}
          >
            <Ionicons
              name="time-outline"
              size={24}
              color="#D67E3B"
            />
          </View>
}