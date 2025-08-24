import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
const { width, height } = Dimensions.get("window");

import React, { useCallback } from "react";
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

const FeedingList = [
  {
    id: 1,
    img: require("../../assets/images/Feeding1.jpeg"),
    description: "feeding.wateringOfAnimals",
  },
  {
    id: 2,
    img: require("../../assets/images/Feeding2.jpeg"),
    description: "feeding.greenFodderOnTheBunds",
  },

  {
    id: 4,
    img: require("../../assets/images/Feeding4.jpeg"),
    description: "feeding.chaffedGreenMaizeFodder",
  },
  {
    id: 5,
    img: require("../../assets/images/Feeding3.jpeg"),
    description: "feeding.paddyStrawFeeding",
  },
  {
    id: 6,
    img: require("../../assets/images/Feeding5.jpeg"),
    description: "feeding.hayStack",
  },
  {
    id: 7,
    img: require("../../assets/images/Feeding6.jpeg"),
    description: "feeding.individualFeedingOfChaffedHybridNapier",
  },
  {
    id: 8,
    img: require("../../assets/images/Feeding7.jpeg"),
    description: "feeding.correctSizeOfChaffedMaize",
  },
  {
    id: 9,
    img: require("../../assets/images/Feeding8.jpeg"),
    description: "feeding.sunflowerCake",
  },
  {
    id: 10,
    img: require("../../assets/images/Feeding9.jpeg"),
    description: "feeding.unchaffedGreenFodderNotAGoodPractice",
  },
];

export default function FeedingProduction({ navigation }) {
  const renderItem = useCallback(
    ({ item }) => (
      <View style={{ alignItems: "center" }}>
        <View style={styles.imageHeader}>
          <Text style={styles.imageName}>{i18n.t(item.description)}</Text>
        </View>
        <View
          style={[
            styles.imageContainer,
            {
              justifyContent: "space-evenly",
            },
          ]}
        >
          <Image
            source={item.img}
            style={{ width: "100%", height: 180, borderRadius: 5 }}
          />
        </View>
      </View>
    ),
    []
  );
  return (
    <View style={styles.screen}>
      <Text
        style={{
          color: "#9a0202",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 16,
        }}
      >
        {i18n.t("feeding.feeding")}
      </Text>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#2d2121", fontSize: 16, fontWeight: "600" }}>
          {i18n.t("feeding.feeding")}{" "}
        </Text>
        {i18n.t("feeding.feedingDescription")}
      </Text>
      <FlatList
        data={FeedingList}
        //numColumns={width > 400 ? 2 : 1}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 200,
    backgroundColor: "#cccac8",
  },

  imageHeader: {
    // backgroundColor: "#b6b4b6",
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  imageContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
    // padding: width < 890 ? 10 : 25,
    // height: 260,
    borderRadius: 5,
    marginBottom: 25,
    width: width < 890 ? 300 : 440,
    alignItems: "center",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#9b0e7e",
    shadowOpacity: 0.45,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
  },

  imageName: {
    color: "#393838",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
