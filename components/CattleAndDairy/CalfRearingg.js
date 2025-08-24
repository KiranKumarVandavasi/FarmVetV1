import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
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

const RearingList = [
  {
    id: 1,
    img: require("../../assets/images/Rearing1.jpeg"),
    description: "calfRearingg.gradedMurrahBuffaloeWithNewBornCalf",
  },
  {
    id: 2,
    img: require("../../assets/images/Rearing2.jpeg"),
    description: "calfRearingg.newBornCalves",
  },
  {
    id: 3,
    img: require("../../assets/images/Rearing3.jpeg"),
    description: "calfRearingg.colostrumFeeding",
  },
  {
    id: 4,
    img: require("../../assets/images/Rearing4.jpeg"),
    description: "calfRearingg.protectionOfCalves",
  },
  {
    id: 5,
    img: require("../../assets/images/Rearing5.jpeg"),
    description: "calfRearingg.identificationOfCalves",
  },
  {
    id: 6,
    img: require("../../assets/images/Rearing6.jpeg"),
    description: "calfRearingg.adequateVentilation",
  },
  {
    id: 7,
    img: require("../../assets/images/Rearing7.jpeg"),
    description: "calfRearingg.adequateSpace",
  },
  {
    id: 8,
    img: require("../../assets/images/Rearing8.jpeg"),
    description: "calfRearingg.groomingOfCalves",
  },

  {
    id: 10,
    img: require("../../assets/images/Rearing9.jpeg"),
    description: "calfRearingg.shinyHairCoat",
  },
  {
    id: 11,
    img: require("../../assets/images/Rearing10.jpeg"),
    description: "calfRearingg.dailyCleaning",
  },

  {
    id: 12,
    img: require("../../assets/images/Rearing11.jpeg"),
    description: "calfRearingg.feedingChaffedGreens",
  },
  {
    id: 13,
    img: require("../../assets/images/Rearing12.jpeg"),
    description: "calfRearingg.protectedRailing",
  },
  {
    id: 14,
    img: require("../../assets/images/Rearing13.jpeg"),
    description: "calfRearingg.groupingOfSameAgedCalves",
  },
  {
    id: 15,
    img: require("../../assets/images/Rearing14.jpeg"),
    description: "calfRearingg.brickFlooring",
  },

  {
    id: 16,
    img: require("../../assets/images/Rearing15.jpeg"),
    description: "calfRearingg.healthyHarianaCalves",
  },
  {
    id: 17,
    img: require("../../assets/images/Rearing16.jpeg"),
    description: "calfRearingg.hygienicCalfYard",
  },
];

export default function CalfRearingg({ navigation }) {
  return (
    // <ScrollView
    //   // nestedScrollEnabled={true}
    //   // stickyHeaderIndices={[0]}
    //   showsVerticalScrollIndicator={false}
    //   // style={styles.container}
    //   // horizontal={true}
    //   // vertical={true}
    // >
    <View style={styles.screen}>
      {/* <Text
        style={{
          color: "#9a0202",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 16,
        }}
      >
        Rearing
      </Text> */}
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#950202", fontSize: 16, fontWeight: "600" }}>
          {i18n.t("calfRearingg.calfRearingGoodPractice")}{" "}
        </Text>
        {i18n.t("calfRearingg.allCalves")}
      </Text>
      <FlatList
        data={RearingList}
        //numColumns={width > 400 ? 2 : 1}
        renderItem={({ item }) => (
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
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
    // </ScrollView>
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
    shadowColor: "black",
    shadowOpacity: 0.35,
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
