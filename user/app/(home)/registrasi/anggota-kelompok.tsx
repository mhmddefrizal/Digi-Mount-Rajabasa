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

  return ();
}