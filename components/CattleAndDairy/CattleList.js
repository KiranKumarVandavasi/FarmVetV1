import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native";
import Press from "../../ui/Press";
import { FadeInFlatList } from "@ja-ka/react-native-fade-in-flatlist";
import i18n from "../../localization/i18n";

const List = [
  {
    id: "1",
    name: "cattleList.dairyProject",
    page: "Dairy",
  },
  {
    id: "2",
    name: "cattleList.environmentalDairyHousing",
    page: "EnvironmentalDairyHousing",
  },
  {
    id: "3",
    name: "cattleList.housing",
    page: "Housing",
  },
  {
    id: "4",
    name: "cattleList.organicDairy",
    page: "OrganicDairy",
  },
  {
    id: "5",
    name: "cattleList.selectionOfGoodAnimals",
    page: "SelectionOfGoodAnimals",
  },
  {
    id: "6",
    name: "cattleList.wallowingTank",
    page: "WallowingTank",
  },
  {
    id: "7",
    name: "cattleList.calfRearing",
    page: "CalfRearing",
  },
  {
    id: "8",
    name: "cattleList.cleanMilkProduction",
    page: "CleanMilkProduction",
  },
  {
    id: "9",
    name: "cattleList.feeding",
    page: "Feeding",
  },
  {
    id: "10",
    name: "cattleList.heatDetection",
    page: "HeatDetection",
  },

  {
    id: "11",
    name: "cattleList.diseases",
    page: "Diseases",
  },
  {
    id: "12",
    name: "cattleList.preventiveHealthCare",
    page: "PreventiveHealthCare",
  },
];

export default function CattleList() {
  return (
    <FadeInFlatList
      initialDelay={100}
      durationPerItem={500}
      parallelItems={5}
      itemsToFadeIn={10}
      data={List}
      renderItem={({ item }) => (
        <Press page={item.page}>
          <Text style={styles.eachButton}>{i18n.t(item.name)}</Text>
        </Press>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  eachButton: {
    backgroundColor: "#58b870",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "#022920",
  },
});
