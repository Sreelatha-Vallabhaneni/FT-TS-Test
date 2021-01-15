import React, { FC } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import FontLoad from "./fontLoad";

const Button: FC<{
  title: string;
  onPress: () => void;
  icon: string;
  fontName: string;
  style: object;
}> = ({ title, onPress, fontName, style, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontLoad title={title} fontName={fontName} styles={style} />
      <Image style={styles.image} source={{ uri: icon }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 290,
    height: 44,
    opacity: 100,
  },
  image: {
    width: 35,
    height: 17,
  },
});

export default Button;
