import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import i18n from "../../localization/i18n";

const goatList = [
  {
    id: 1,
    img: require("../../assets/images/goat1.jpeg"),
    description: "goatHousing.scientificHousing",
  },
  {
    id: 2,
    img: require("../../assets/images/goat2.jpeg"),
    description: "goatHousing.sheepShed",
  },
  {
    id: 3,
    img: require("../../assets/images/goat3.jpeg"),
    description: "goatHousing.coveredAreaInSheepShed",
  },
  {
    id: 4,
    img: require("../../assets/images/goat4.jpeg"),
    description: "goatHousing.fullViewOfGoodSheepShed",
  },
  {
    id: 5,
    img: require("../../assets/images/goat5.jpeg"),
    description: "goatHousing.housingAtFieldLevel",
  },
  {
    id: 6,
    img: require("../../assets/images/goat6.jpeg"),
    description: "goatHousing.linkFencing",
  },
  {
    id: 7,
    img: require("../../assets/images/goat7.jpeg"),
    description: "goatHousing.tatchedShedWithLeastCost",
  },
  {
    id: 8,
    img: require("../../assets/images/goat8.jpeg"),
    description: "goatHousing.slottedFlooring",
  },
  {
    id: 9,
    img: require("../../assets/images/goat9.jpeg"),
    description: "",
  },
  {
    id: 10,
    img: require("../../assets/images/goat10.jpeg"),
    description: "",
  },
  {
    id: 11,
    img: require("../../assets/images/goat11.jpeg"),
    description: "",
  },

  {
    id: 12,
    img: require("../../assets/images/goat12.jpeg"),
    description: "",
  },
  {
    id: 13,
    img: require("../../assets/images/goat13.jpeg"),
    description: "",
  },
  {
    id: 14,
    img: require("../../assets/images/goat14.jpeg"),
    description: "",
  },
  {
    id: 15,
    img: require("../../assets/images/goat15.jpeg"),
    description: "",
  },
  {
    id: 16,
    img: require("../../assets/images/goat16.jpeg"),
    description: "",
  },
  {
    id: 17,
    img: require("../../assets/images/goat17.jpeg"),
    description: "",
  },
  {
    id: 18,
    img: require("../../assets/images/goat18.jpeg"),
    description: "",
  },
  {
    id: 19,
    img: require("../../assets/images/goat19.jpeg"),
    description: "",
  },
  {
    id: 20,
    img: require("../../assets/images/goat20.jpeg"),
    description: "",
  },
  {
    id: 21,
    img: require("../../assets/images/goat21.jpeg"),
    description: "",
  },
];

export default function GoatHousing({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text
        style={{
          color: "#9a0202",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 6,
        }}
      >
        {i18n.t("goatHousing.goatHousing")}
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#2c2525", fontSize: 16, fontWeight: "bold" }}>
          {i18n.t("goatHousing.theHousing")}
        </Text>
        {i18n.t("goatHousing.isProvided")}
      </Text>
      <FlatList
        data={goatList}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <View style={styles.imageHeader}>
              <Text style={styles.imageName}>{i18n.t(item.description)}</Text>
            </View>
            <Image source={item.img} style={{ width: "90%", height: 180 }} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  imageHeader: {
    backgroundColor: "#819482",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: "#819482",
    padding: width < 890 ? 10 : 25,
    height: 260,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 360 : 440,
    alignItems: "center",
  },
  imageName: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
