import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import FontLoad from "./fontLoad";

const HomeFooter: FC<{
  btnTitle: string;
  btnName: string;
  fontName: string;
}> = ({ btnTitle, btnName, fontName }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.titleWrap,
          {
            backgroundColor: "#025D92",
            shadowColor: "#33333367",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 4,
          },
        ]}
      >
        <FontLoad
          title={btnTitle}
          fontName={fontName}
          styles={[styles.title]}
        />
      </View>
      <View
        style={[styles.titleWrap, { borderWidth: 1, borderColor: "#FFFFFF" }]}
      >
        <FontLoad title={btnName} fontName={fontName} styles={[styles.title]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    bottom: -60,
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleWrap: {
    width: 315,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    opacity: 100,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    opacity: 100,
  },
});

export default HomeFooter;
