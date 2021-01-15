import React, { FC, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import FontLoad from "./fontLoad";
import i18n from "i18n-js";

const AllButtons: FC<{
  Dansk: string;
  Svenska: string;
  Norsk: string;
  Tysk: string;
  Engelsk: string;
  setModalVisible: Function;
  modalVisible: boolean;
}> = ({
  Dansk,
  Svenska,
  Norsk,
  Tysk,
  Engelsk,
  setModalVisible,
  modalVisible,
}) => {
  const [daState, setDaState] = useState(false);
  const [svState, setSvState] = useState(false);
  const [noState, setNoState] = useState(false);
  const [deState, setDeState] = useState(false);
  const [enState, setEnState] = useState(false);
  const [key, setKey] = useState<any>([]);

  return (
    <View
      style={{
        justifyContent: "space-between",
        height: 450,
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          height: 300,
        }}
      >
        <TouchableOpacity
          style={daState ? styles.btnSelect : styles.button}
          onPress={() => {
            setKey("da");
            setDaState(!daState);
          }}
        >
          <FontLoad
            title={Dansk}
            styles={daState ? styles.txtSelect : styles.text}
            fontName={"SourceSansPro_600SemiBold"}
          />
          <Image
            source={require("../../assets/flags/dk.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={svState ? styles.btnSelect : styles.button}
          onPress={() => {
            setKey("sv");
            setSvState(!svState);
          }}
        >
          <FontLoad
            title={Svenska}
            styles={svState ? styles.txtSelect : styles.text}
            fontName={"SourceSansPro_600SemiBold"}
          />
          <Image
            source={require("../../assets/flags/se.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={noState ? styles.btnSelect : styles.button}
          onPress={() => {
            setKey("no");
            setNoState(!noState);
          }}
        >
          <FontLoad
            title={Norsk}
            styles={noState ? styles.txtSelect : styles.text}
            fontName={"SourceSansPro_600SemiBold"}
          />
          <Image
            source={require("../../assets/flags/en.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={deState ? styles.btnSelect : styles.button}
          onPress={() => {
            setKey("de");
            setDeState(!deState);
          }}
        >
          <FontLoad
            title={Tysk}
            styles={deState ? styles.txtSelect : styles.text}
            fontName={"SourceSansPro_600SemiBold"}
          />
          <Image
            source={require("../../assets/flags/ge.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={enState ? styles.btnSelect : styles.button}
          onPress={() => {
            setKey("en");
            setEnState(!enState);
          }}
        >
          <FontLoad
            title={Engelsk}
            styles={enState ? styles.txtSelect : styles.text}
            fontName={"SourceSansPro_600SemiBold"}
          />
          <Image
            source={require("../../assets/flags/en.png")}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableHighlight
        onPress={() => {
          setModalVisible(!modalVisible);
          {
            key ? (i18n.locale = key) : (i18n.locale = "da");
          }
        }}
        style={styles.submitBtn}
      >
        <FontLoad
          title={"ok"}
          styles={styles.submitTxt}
          fontName={"SourceSansPro_600SemiBold"}
        />
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonIcon: {
    width: 35,
    height: 17,
  },
  btnSelect: {
    fontSize: 18,
    borderColor: "#33333367",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 290,
    height: 44,
    alignItems: "center",
    borderRadius: 25,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 290,
    height: 44,
    alignItems: "center",
  },
  txtSelect: {
    color: "black",
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    fontWeight: "800",
  },
  text: {
    color: "#6D7784",
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    fontWeight: "bold",
  },
  submitTxt: {
    marginTop: 10,
    width: 290,
    height: 44,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#025E93",
    borderRadius: 25,
  },
});

export default AllButtons;
