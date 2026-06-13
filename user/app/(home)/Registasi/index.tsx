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
       {/* Step */}
      <View style={styles.stepRow}>
        <Text style={styles.stepText}>
          Step 1 dari 5
        </Text>

        <Text style={styles.stepTitle}>
          Informasi Dasar
        </Text>
      </View>
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Registrasi Pendakian
        </Text>

        <Text style={styles.bannerDesc}>
          Lengkapi data perjalanan Anda untuk izin masuk kawasan.
        </Text>
      </View>
       {/* Form */}
      <View style={styles.card}>

        <Text style={styles.label}>
          Tanggal Pendakian
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="calendar-outline"
            size={18}
            color="#1F3D36"
          />
           <TextInput
            placeholder="dd/mm/yyyy"
            value={tanggal}
            onChangeText={setTanggal}
            style={styles.input}
          />
        </View>
         {/* Pilih Jalur */}
        <Text style={styles.label}>
          Pilih Jalur
        </Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.routeCard}>
            <Text>⛰</Text>

            <Text style={styles.routeTitle}>
              Jalur Sumur
            </Text>

            <Text style={styles.routeDesc}>
              Populer & Mudah
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard}>
            <Text>🚶</Text>

            <Text style={styles.routeTitle}>
              Jalur Way Belerang
            </Text>

            <Text style={styles.routeDesc}>
              Tantangan & Pemandangan
            </Text>
          </TouchableOpacity>
        </View>
        {/* Jenis Pendakian */}
        <Text style={styles.label}>
          Jenis Pendakian
        </Text>

        <View style={styles.typeRow}>
          <TouchableOpacity style={styles.activeType}>
            <Text style={styles.activeTypeText}>
              Camping
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.typeButton}>
            <Text>Tektok</Text>
          </TouchableOpacity>
        </View>
}