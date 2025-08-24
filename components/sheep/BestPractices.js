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

const practiceList = [
  {
    id: 1,
    img: require("../../assets/images/practice1.jpeg"),
    description: "bestPractices.adequateFeeding",
  },
  {
    id: 2,
    img: require("../../assets/images/practice2.jpeg"),
    description: "bestPractices.wateringAtAllTimings",
  },
  {
    id: 3,
    img: require("../../assets/images/practice3.jpeg"),
    description: "bestPractices.creepFeeding",
  },
  {
    id: 4,
    img: require("../../assets/images/practice4.jpeg"),
    description: "bestPractices.grazing",
  },
  {
    id: 5,
    img: require("../../assets/images/practice5.jpeg"),
    description: "bestPractices.groupFeeding",
  },
  {
    id: 6,
    img: require("../../assets/images/practice6.jpeg"),
    description: "bestPractices.raisedFloorSystem",
  },
  {
    id: 7,
    img: require("../../assets/images/practice7.jpeg"),
    description: "bestPractices.semiIntensiveManagement",
  },
  {
    id: 8,
    img: require("../../assets/images/practice8.jpeg"),
    description: "bestPractices.stagnantWater",
  },
];

export default function BestPractices({ navigation }) {
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
        {i18n.t("bestPractices.bestManagementPractices")}
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        {i18n.t("bestPractices.bestManagementPracticesDescription")}
      </Text>
      <FlatList
        data={practiceList}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <View style={styles.imageHeader}>
              <Text style={styles.imageDescription}>
                {i18n.t(item.description)}
              </Text>
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

  imageHeader: {
    backgroundColor: "#948181",
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  imageContainer: {
    backgroundColor: "#948181",
    padding: width < 890 ? 10 : 25,
    height: 280,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 360 : 440,
    alignItems: "center",
  },
  imageDescription: {
    color: "#f6f4f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
