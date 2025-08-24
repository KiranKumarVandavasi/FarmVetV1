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
import i18n from "../localization/i18n";

const IntegratedList = [
  {
    id: 1,
    img: require("../assets/images/Integrated1.jpeg"),
    description: "integratedFarming.integratedFarmingSystem",
  },
  {
    id: 2,
    img: require("../assets/images/Integrated2.jpeg"),
    description: "integratedFarming.integratedFarmingSystem2",
  },
  {
    id: 3,
    img: require("../assets/images/Integrated3.jpeg"),
    description: "integratedFarming.integratedFarmingSystem3",
  },
  {
    id: 4,
    img: require("../assets/images/Integrated4.jpeg"),
    description: "integratedFarming.integratedFarmingSystem4",
  },
  {
    id: 5,
    img: require("../assets/images/Integrated5.jpeg"),
    description: "integratedFarming.silvipastureSystem",
  },
  {
    id: 6,
    img: require("../assets/images/Integrated6.jpeg"),
    description: "integratedFarming.cattleSheepFarming",
  },
  {
    id: 7,
    img: require("../assets/images/Integrated7.jpeg"),
    description: "integratedFarming.mangoOrchardGroundnut",
  },
  {
    id: 8,
    img: require("../assets/images/Integrated8.jpeg"),
    description: "integratedFarming.integratedFarmingSystem5",
  },
  {
    id: 9,
    img: require("../assets/images/Integrated9.jpeg"),
    description: "integratedFarming.integratedFarmingSystem6",
  },
  {
    id: 10,
    img: require("../assets/images/Integrated10.jpeg"),
    description: "integratedFarming.integratedFarmingSystem7",
  },
  {
    id: 11,
    img: require("../assets/images/Integrated11.jpeg"),
    description: "integratedFarming.horticultureSheep",
  },
  {
    id: 12,
    img: require("../assets/images/Integrated12.jpeg"),
    description: "integratedFarming.hortipasture",
  },
  {
    id: 13,
    img: require("../assets/images/Integrated13.jpeg"),
    description: "integratedFarming.integratedFarmingSystem8",
  },
  {
    id: 14,
    img: require("../assets/images/Integrated14.jpeg"),
    description: "integratedFarming.integratedFarmingSystem9",
  },
  {
    id: 15,
    img: require("../assets/images/Integrated15.jpeg"),
    description: "integratedFarming.integratedFarmingSystem10",
  },
  {
    id: 16,
    img: require("../assets/images/Integrated16.jpeg"),
    description: "integratedFarming.integratedFarmingSystem11",
  },
  {
    id: 17,
    img: require("../assets/images/Integrated17.jpeg"),
    description: "integratedFarming.integratedFarmingSystem12",
  },
  {
    id: 18,
    img: require("../assets/images/Integrated18.jpeg"),
    description: "integratedFarming.horticultureSheep2",
  },
  {
    id: 19,
    img: require("../assets/images/Integrated19.jpeg"),
    description: "integratedFarming.hortipasture2",
  },
];

export default function IntegratedFarming({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text
        style={{
          textAlign: "center",
          margin: 15,
          maxWidth: 340,
          fontWeight: "500",
        }}
      >
        <Text style={{ color: "#840404", fontSize: 16, fontWeight: "600" }}>
          {i18n.t("integratedFarming.integratedFarming")}{" "}
        </Text>
        <Text style={{ color: "#393838", fontSize: 14, fontWeight: "400" }}>
          {i18n.t("integratedFarming.systemIsAnInnovative")}
        </Text>
      </Text>
      <FlatList
        data={IntegratedList}
        numColumns={width > 400 ? 2 : 1}
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
  );
}
const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cccac8",
  },

  imageHeader: {
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  imageContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
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
