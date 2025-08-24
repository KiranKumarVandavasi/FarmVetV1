import { Text } from "react-native";
import i18n from "../localization/i18n";

function Publication({ navigation }) {
  return (
    <Text style={{ textAlign: "center", paddingTop: 20 }}>
      {i18n.t("publication.publicationMessage")}
    </Text>
  );
}

export default Publication;
