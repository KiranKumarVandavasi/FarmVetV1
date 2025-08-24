import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Communications from "react-native-communications";
import i18n from "../localization/i18n";

function FarmerHelpDesk({ navigation }) {
  return (
    <View style={styles.rootScreen}>
      <Text>{i18n.t("farmerHelpDesk.theIdeaIsToHelpTheFarmer")}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() =>
          Communications.web(
            "https://www.nddb.coop/farmer/animal-nutrition/state-wise-list-of-seeds-producer-supplier"
          )
        }
      >
        <View>
          <Text style={{ color: "blue", paddingTop: 20 }}>
            {i18n.t("farmerHelpDesk.fodderSeedSupplier")} {"  <"}--{" "}
            {i18n.t("farmerHelpDesk.clickHere")}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => Communications.web("https://pondchy.in/")}
      >
        <View>
          <Text style={{ color: "blue", paddingTop: 20 }}>
            {i18n.t("farmerHelpDesk.mineralBlocks")} {"  <"}--{" "}
            {i18n.t("farmerHelpDesk.clickHere")}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => Communications.web("https://www.nddb.coop/")}
      >
        <View>
          <Text style={{ color: "blue", paddingTop: 20 }}>
            {i18n.t("farmerHelpDesk.nationalDairyDevelopmentBoard")} {"  <"}--{" "}
            {i18n.t("farmerHelpDesk.clickHere")}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default FarmerHelpDesk;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 20,
    fontSize: 16,
  },
});
