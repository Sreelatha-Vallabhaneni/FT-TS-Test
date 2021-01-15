import React, { FC, useState } from "react";
import {
  View,
  Alert,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Image,
} from "react-native";
import HomeScreen from "./homeScreen";
import FontLoad from "../components/fontLoad";
import dkFlag from "../../assets/flags/dk.png";
import { translator } from "../locale";
import AllButtons from "../components/allButtons";

const ModalScreen: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        presentationStyle={"pageSheet"}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.closeBtn}
            underlayColor="#FFFFFF"
          >
            <Image
              style={{ width: 43, height: 44 }}
              source={require("../../assets/CloseX.png")}
            />
          </TouchableHighlight>

          <FontLoad
            title={translator.t("HOME_SCREEN.modalTitle")}
            fontName={"SourceSansPro_900Black"}
            styles={styles.modalTitle}
          />
          <AllButtons
            Dansk={"Dansk"}
            Svenska={"Svenska"}
            Norsk={"Norsk"}
            Tysk={"Tysk"}
            Engelsk={"Engelsk"}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </View>
      </Modal>
      <HomeScreen
        title={translator.t("HOME_SCREEN.middleText")}
        btnTitle={translator.t("HOME_SCREEN.buttonGetStarted")}
        btnName={translator.t("HOME_SCREEN.buttonFindTrailer")}
      />
      <View
        style={{ width: 375, alignItems: "center", justifyContent: "center" }}
      >
        <TouchableHighlight
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          underlayColor="#0089B9"
        >
          <View style={styles.sprogBtn}>
            <FontLoad
              title={translator.t("HOME_SCREEN.languageChoice")}
              fontName={"SourceSansPro_400Regular"}
              styles={styles.sprogTxt}
            />
            <Image source={dkFlag} style={{ width: 35, height: 17 }} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxSelect: {
    borderColor: "#00000067",
    color: "blue",
    borderWidth: 1,
    fontWeight: "bold",
  },
  modalContainer: {
    justifyContent: "space-between",
    width: 375,
    height: 667,
    left: 20,
  },
  content: {
    paddingBottom: 10,
    alignItems: "center",
  },
  closeBtn: {
    marginTop: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalTitle: {
    color: "#060C10",
    fontSize: 28,
    lineHeight: 30,
    letterSpacing: 0,
  },
  flagTxt: {
    color: "#00000067",
    fontSize: 18,
  },
  sprogBtn: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: 153,
    height: 53,
    opacity: 100,
    top: -10,
  },
  sprogTxt: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 26,
    textTransform: "uppercase",
  },
});

export default ModalScreen;
