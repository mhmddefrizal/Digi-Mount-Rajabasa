import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../../../styles/HomeStyle";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="menu" size={24} color="#1F3D36" />

          <Text style={styles.headerTitle}>Digi-Mount Rajabasa</Text>
        </View>
        {/* Greeting */}
        <Text style={styles.smallText}>Halo, Ketua Kelompok</Text>

        <Text style={styles.welcome}>Selamat Datang</Text>

        <Text style={styles.description}>Siap untuk petualangan berikutnya di Gunung Rajabasa?</Text>
        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Status Kawasan</Text>
          </View>

          <Text style={styles.bannerTitle}>Jalur Pendakian Dibuka</Text>

          <Text style={styles.bannerWeather}>☀ Cuaca Cerah • 24°C</Text>
        </View>
        {/* Registrasi */}
        <TouchableOpacity style={styles.card} onPress={() => router.push("/(home)/registrasi")}>
          <View style={styles.iconBox}>
            <Ionicons name="walk" size={24} color="white" />
          </View>
          <Text style={styles.cardTitle}>Mulai Registrasi</Text>

          <Text style={styles.cardDesc}>Daftarkan kelompok pendakian Anda dengan aman dan cepat.</Text>

          <Ionicons style={styles.arrow} name="arrow-forward" size={20} color="#1F3D36" />
        </TouchableOpacity>
        {/* Riwayat */}
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconBox, styles.orangeBox]}>
            <Ionicons name="time-outline" size={24} color="#D67E3B" />
          </View>
          <Text style={styles.cardTitle}>Lihat Riwayat</Text>

          <Text style={styles.cardDesc}>Cek status perizinan dan dokumen pendakian sebelumnya.</Text>
          <Ionicons style={styles.arrow} name="arrow-forward" size={20} color="#1F3D36" />
        </TouchableOpacity>
        {/* Tips */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Ionicons name="shield-checkmark-outline" size={18} color="#1F3D36" />

            <Text style={styles.tipsTitle}>Tips Keamanan</Text>
          </View>
          <Text style={styles.tip}>• Pastikan setiap anggota kelompok membawa identitas fisik yang berlaku.</Text>

          <Text style={styles.tip}>• Lakukan pendaftaran minimal 2 hari sebelum tanggal keberangkatan.</Text>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#1F3D36" />
          <Text style={styles.activeNav}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="time-outline" size={22} color="gray" />
          <Text style={styles.navText}>Riwayat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="gray" />
          <Text style={styles.navText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
