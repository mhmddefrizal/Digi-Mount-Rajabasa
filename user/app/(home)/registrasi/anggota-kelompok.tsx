import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import styles from "@/styles/AnggotaKelompokStyle";

export default function AnggotaKelompok() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [telepon, setTelepon] = useState("");

  const [headlamp, setHeadlamp] = useState(false);
  const [jasHujan, setJasHujan] = useState(false);

  return (
     <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={22}
            color="#1F3D36"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Digi-Mount Rajabasa
        </Text>
      </View>
       {/* Step */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepLabel}>
          PENDAFTARAN
        </Text>

        <View style={styles.stepRow}>
          <Text style={styles.pageTitle}>
            Anggota Kelompok
          </Text>

          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>
              Step 2/5
            </Text>
          </View>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>
      {/* Banner */}
      <View style={styles.banner}>
        <Ionicons
          name="people-outline"
          size={28}
          color="#FFF"
        />

        <Text style={styles.bannerText}>
          Pastikan data setiap anggota sesuai
          dengan identitas resmi (KTP/SIM).
        </Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.memberHeader}>
          <Text style={styles.memberTitle}>
            Anggota #1 (Ketua)
          </Text>

          <Ionicons
            name="shield-checkmark-outline"
            size={18}
            color="#1F3D36"
          />
        </View>
        {/* Nama */}
        <Text style={styles.label}>
          Nama Lengkap
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Contoh: Budi Santoso"
          value={nama}
          onChangeText={setNama}
        />

        {/* NIK */}
        <Text style={styles.label}>
          NIK (KTP)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="16 digit nomor induk"
          keyboardType="numeric"
          value={nik}
          onChangeText={setNik}
        />
        {/* Telepon */}
        <Text style={styles.label}>
          No. Telepon
        </Text>

        <TextInput
          style={styles.input}
          placeholder="0812xxxx"
          keyboardType="phone-pad"
          value={telepon}
          onChangeText={setTelepon}
        />
  );
}