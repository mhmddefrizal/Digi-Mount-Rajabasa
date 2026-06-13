import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../../../styles/RegistasiPendakianStyle";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RegistrasiPendakian() {
  const [tanggal, setTanggal] = useState("");
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [jalur, setJalur] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="#1F3D36" />

        <Text style={styles.headerTitle}>Digi-Mount Rajabasa</Text>
      </View>
      {/* Step */}
      <View style={styles.stepRow}>
        <Text style={styles.stepText}>Step 1 dari 5</Text>

        <Text style={styles.stepTitle}>Informasi Dasar</Text>
      </View>
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Registrasi Pendakian</Text>

        <Text style={styles.bannerDesc}>Lengkapi data perjalanan Anda untuk izin masuk kawasan.</Text>
      </View>
      {/* Form */}
      <View style={styles.card}>
        <Text style={styles.label}>Tanggal Pendakian</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={18} color="#1F3D36" />

          <TouchableOpacity style={{ flex: 1 }} onPress={() => setShowPicker(true)}>
            <Text
              style={{
                paddingVertical: 12,
                marginLeft: 10,
              }}
            >
              {tanggal || "Pilih tanggal pendakian"}
            </Text>
          </TouchableOpacity>
        </View>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowPicker(false);

              if (selectedDate) {
                setDate(selectedDate);

                const formatted = selectedDate.getDate().toString().padStart(2, "0") + "/" + (selectedDate.getMonth() + 1).toString().padStart(2, "0") + "/" + selectedDate.getFullYear();

                setTanggal(formatted);
              }
            }}
          />
        )}
        {/* Pilih Jalur */}
        <Text style={styles.label}>Pilih Jalur</Text>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.routeCard, jalur === "sumur" && styles.selectedRoute]} onPress={() => setJalur("sumur")}>
            <Text>⛰</Text>

            <Text style={styles.routeTitle}>Jalur Sumur</Text>

            <Text style={styles.routeDesc}>Populer & Mudah</Text>

            {jalur === "sumur" && <Ionicons name="checkmark-circle" size={22} color="#2E7D32" style={styles.checkIcon} />}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.routeCard, jalur === "way-belerang" && styles.selectedRoute]} onPress={() => setJalur("way-belerang")}>
            <Text>🚶</Text>

            <Text style={styles.routeTitle}>Jalur Way Belerang</Text>

            <Text style={styles.routeDesc}>Tantangan & Pemandangan</Text>

            {jalur === "way-belerang" && <Ionicons name="checkmark-circle" size={22} color="#2E7D32" style={styles.checkIcon} />}
          </TouchableOpacity>
        </View>
        {/* Jenis Pendakian */}
        <Text style={styles.label}>Jenis Pendakian</Text>

        <View style={styles.typeRow}>
          <TouchableOpacity style={styles.activeType}>
            <Text style={styles.activeTypeText}>Camping</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.typeButton}>
            <Text>Tektok</Text>
          </TouchableOpacity>
        </View>
        {/* Warning */}
        <View style={styles.warningBox}>
          <Ionicons name="warning-outline" size={18} color="#E67E22" />

          <Text style={styles.warningText}>Peringatan: Tektok tidak diperbolehkan setelah jam 12 siang demi keselamatan pendaki.</Text>
        </View>
        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={() => router.push("/registrasi/anggota-kelompok")}>
          <Text style={styles.nextButtonText}>Lanjut ke Anggota Kelompok</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
