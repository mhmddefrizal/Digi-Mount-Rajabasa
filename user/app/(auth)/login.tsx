import styles from "@/styles/LoginStyle";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Login() {
  //state untuk menyimpan username
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // state untuk menyimpan email
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#1F3D36" />
        <Text style={styles.headerTitle}>Digi-Mount Rajabasa</Text>
      </View>
      {/* Logo */}
      <Image
  source={require("../../assets/images/Logo_Gunung.png")}
  style={styles.logo}
  resizeMode="contain"
/>
      {/* Selamat datang */}
      <Text style={styles.subtitle}>Selamat Datang</Text>
      <Text style={styles.subtitle}>Masuk untuk memulai petualangan Anda di Gunung Rajabasa.</Text>

      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        {/* Email */}
        <Text style={styles.label}>Alamat Email</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="name@email.com" value={email} onChangeText={setEmail} style={styles.input} />
          <Ionicons name="mail-outline" size={20} color="gray" />
        </View>

        {/* Password */}
        <Text style={styles.label}>Kata Sandi</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="••••••••" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
        </View>
        {/* Lupa Password */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Lupa kata sandi?</Text>
        </TouchableOpacity>
      </View>
      {/* Divider/ atau */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Atau</Text>
        <View style={styles.line} />
      </View>
      {/* Register */}
      <Text style={styles.register}>
        Belum punya akun? <Text style={styles.registerBold}>Daftar Sekarang</Text>
      </Text>
    </View>
  );
}
