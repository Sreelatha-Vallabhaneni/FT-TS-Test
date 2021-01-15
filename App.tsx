import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import HomeModal from "./src/screens/modal";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "i18n-js";

i18n.fallbacks = true;
i18n.locale = "da";

export default function App() {
  return (
    <LinearGradient
      colors={["#0089B9", "#025E93", "#01476F"]}
      style={styles.container}
    >
      <HomeModal />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
