import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import FontSelection from "./fontLoad";

const Home: FC<{ title: string; fontName: string }> = ({ title, fontName }) => {
  return (
    <View style={styles.container}>
      <FontSelection title={title} fontName={fontName} styles={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: 282 || "fitContent",
    height: "auto",
    paddingTop: 12,
    textAlign: "center",
    fontSize: 40,
    textTransform: "uppercase",
    shadowColor: "#00000065",
    color: "#FFFFFF",
    lineHeight: 40,
    letterSpacing: 0,
  },
});
export default Home;
