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
  );
}