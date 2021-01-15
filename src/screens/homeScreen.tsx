import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/homeHeader";
import Footer from "../components/homeFooter";
import { translator } from "../locale";

const Home: FC<{ title: string; btnTitle: string; btnName: string }> = ({
  title,
  btnTitle,
  btnName,
}) => {
  console.log("RENDERED HOME", translator.locale);
  return (
    <View style={styles.container}>
      <Header title={title} fontName={"SourceSansPro_900Black"} />
      <Footer
        btnTitle={btnTitle}
        btnName={btnName}
        fontName={"SourceSansPro_700Bold"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    width: 375,
    height: 667,
  },
});
export default Home;
