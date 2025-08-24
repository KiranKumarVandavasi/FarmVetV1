import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import React, { cloneElement } from "react";
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

const sheepList = [
  {
    id: 1,
    img: require("../../assets/images/sheep2.jpeg"),
    description: "sheepBreeding.apron",
  },
  {
    id: 2,
    img: require("../../assets/images/sheep3.jpeg"),
    description: "sheepBreeding.tryingOfApron",
  },
  {
    id: 3,
    img: require("../../assets/images/sheep4.jpeg"),
    description: "sheepBreeding.apronRam",
  },
  {
    id: 4,
    img: require("../../assets/images/sheep5.jpeg"),
    description: "sheepBreeding.breathPaintingOfApronedRam",
  },
  {
    id: 5,
    img: require("../../assets/images/sheep6.jpeg"),
    description: "sheepBreeding.detectionOfEweInHeatByRam",
  },
  {
    id: 6,
    img: require("../../assets/images/sheep7.jpeg"),
    description: "sheepBreeding.eweInHeatWithBackPainted",
  },
  {
    id: 7,
    img: require("../../assets/images/sheep8.jpeg"),
    description: "sheepBreeding.leadingRamInFlockForHeatDetection",
  },
  {
    id: 8,
    img: require("../../assets/images/sheep9.jpeg"),
    description: "sheepBreeding.handMating",
  },
];

// "sheepBreeding": {
//   "apron": "Apron",
//   "tryingOfApron": "Trying of Apron to Ram",
//   "apronRam": "Apron Ram",
//   "breathPaintingOfApronedRam": "Breath painting of Aproned Ram",
//   "detectionOfEweInHeatByRam": "Detection of ewe in heat by Ram",
//   "eweInHeatWithBackPainted": "Ewe in heat with back painted",
//   "leadingRamInFlockForHeatDetection": "Leading Ram in flock for heat detection.",
//   "handMating": "Hand mating.",
//   "sheep": "Sheep",
//   "sheepBreedingAndHeatDetection": "Sheep Breeding & Heat Detection",
//   "sheepComes": "comes into heat during March- April, June-July, Sep-Oct. About 60-70% of animals come into heat during June-July. The rest of animals come to heat during March-April and Sep-Oct. Detection of heat in sheep is difficult by external Signs. Detection of heat can be done more effectively by using Aproned Ram. The following pictures show various steps in preparation of Aproned Ram (Male) and breeding of females (ewes). The Breeding Ram should be changed at least every two years. The good idea is try to exchange your ram with other persons sheep flock in the same village / other villages / sell his own ram get a new ram. Do not use the males that are born in your flock as future breeding rams."
// },

export default function SheepBreeding({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text
        style={{
          color: "#9a0202",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 6,
        }}
      >
        {i18n.t("sheepBreeding.sheepBreedingAndHeatDetection")}{" "}
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
          {i18n.t("sheepBreeding.sheep")}{" "}
        </Text>
        {i18n.t("sheepBreeding.sheepComes")}{" "}
      </Text>
      <FlatList
        data={sheepList}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <View style={styles.videoHeader}>
              <Text style={styles.videoName}>{i18n.t(item.description)}</Text>
            </View>
            <Image source={item.img} style={{ width: "90%", height: 200 }} />
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

  videoHeader: {
    backgroundColor: "#948181",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  videoContainer: {
    backgroundColor: "#948181",
    padding: width < 890 ? 10 : 25,
    height: 270,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 360 : 440,
    alignItems: "center",
  },
  videoName: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
