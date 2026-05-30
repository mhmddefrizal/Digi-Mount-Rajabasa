import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "@/styles/RegisterStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header Icon */}
      <View style={styles.iconContainer}>
        <Ionicons name="walk" size={40} color="white" />
      </View>
      {/* Title */}
      <Text style={styles.title}>Buat Akun</Text>

      <Text style={styles.subtitle}>Mulai petualangan Anda di Gunung Rajabasa dengan mudah</Text>
      {/* Card */}
      <View style={styles.card}>
        {/* Nama */}
        <Text style={styles.label}>Nama Lengkap</Text>
        <View style={styles.inputBox}>
          <Ionicons name="person-outline" size={18} color="gray" />
          <TextInput placeholder="Masukkan nama sesuai KTP" value={nama} onChangeText={setNama} style={styles.input} />
        </View>
        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={18} color="gray" />
          <TextInput placeholder="contoh@email.com" value={email} onChangeText={setEmail} style={styles.input} />
        </View>
        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <Ionicons name="lock-closed-outline" size={18} color="gray" />
          <TextInput placeholder="Minimal 8 karakter" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
          <Ionicons name="eye-outline" size={18} color="gray" />
        </View>
        {/* Checkbox */}
        <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgree(!agree)}>
          <Ionicons name={agree ? "checkbox" : "square-outline"} size={20} color="#1F3D36" />
          <Text style={styles.checkboxText}>Saya menyetujui Syarat & Ketentuan serta kebijakan privasi</Text>
        </TouchableOpacity>
        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daftar Sekarang →</Text>
        </TouchableOpacity>
        {/* Login link */}
        <Text style={styles.loginText}>
          Sudah memiliki akun? <Text style={styles.loginBold}>Masuk di sini</Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;