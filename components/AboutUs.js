import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Press from "../ui/Press";
import OpactiyAnimation from "../ui/OpacityAnimation";
import i18n from "../localization/i18n";

function AboutUs() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{i18n.t("aboutus.drYravindraReddy")}</Text>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/a.jpg")}
          />
        </View>
      </View>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <Text style={styles.intro}>
          {"    "}
          {i18n.t("aboutus.motivatingAndTalented")}
          <Text style={[styles.highlight, { color: "#b00505", fontSize: 13 }]}>
            {" "}
            {i18n.t("aboutus.livestockProductionManagement")}{" "}
          </Text>
          {i18n.t("aboutus.professorDrivenToInspireStudents")}
          <Text style={styles.highlight}>
            {" "}
            {i18n.t("aboutus.has20YearsOfExperience")}
          </Text>{" "}
        </Text>
        <View style={styles.highlightBack}>
          <Text style={[styles.highlight, { fontSize: 16 }]}>
            {i18n.t("aboutus.detailsOf")}
            <Text style={{ color: "#b00505", fontSize: 16 }}>
              {" "}
              {i18n.t("aboutus.academic")}{" "}
            </Text>
            {i18n.t("aboutus.qualifications")}
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>B.V.Sc & A.H.</Text>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "55%" }]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.dateOfLeaving")}
                    </Text>
                    <Text style={[styles.cardTextKey, { height: "30%" }]}>
                      {i18n.t("aboutus.nameOfSchool")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.nameOfBoard")}
                    </Text>
                  </View>
                  <View style={[styles.cardText, { width: "45%" }]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("aboutus.september1988")}
                    </Text>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("aboutus.august1993")}
                    </Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { height: "30%", lineHeight: 18 },
                      ]}
                    >
                      {i18n.t("aboutus.collegeOfVetyScienceTirupati")}
                    </Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { lineHeight: 20, fontSize: 13 },
                      ]}
                    >
                      {i18n.t("aboutus.andhraPradeshAgrlUniversity")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>M.V.Sc & A.H.</Text>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "55%" }]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.dateOfLeaving")}
                    </Text>
                    <Text style={[styles.cardTextKey, { height: "34%" }]}>
                      {i18n.t("aboutus.nameOfSchool")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.nameOfBoard")}
                    </Text>
                  </View>
                  <View style={[styles.cardText, { width: "45%" }]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("aboutus.july1993")}
                    </Text>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("aboutus.october1995")}
                    </Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { height: "34%", lineHeight: 18 },
                      ]}
                    >
                      {i18n.t("aboutus.collegeOfVetyScienceRajendraNagar")}
                    </Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { lineHeight: 20, fontSize: 13 },
                      ]}
                    >
                      {i18n.t("aboutus.andhraPradeshAgrlUniversity")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Ph.D(LPM)</Text>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "55%" }]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.dateOfLeaving")}
                    </Text>
                    <Text style={[styles.cardTextKey, { height: "34%" }]}>
                      {i18n.t("aboutus.nameOfSchool")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("aboutus.nameOfBoard")}
                    </Text>
                  </View>
                  <View style={styles.cardText}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("aboutus.march2005")}
                    </Text>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("aboutus.november2008")}
                    </Text>
                    <Text
                      style={[
                        styles.cardTextValue,
                        { height: "34%", lineHeight: 18 },
                      ]}
                    >
                      {i18n.t("aboutus.collegeOfVetyScienceRajendraNagar")}
                    </Text>
                    <Text style={[styles.cardTextValue, {}]}>
                      {i18n.t("aboutus.svvuTirupati")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
        </View>
      </ScrollView>
    </>
  );
}

export default AboutUs;

const styles = StyleSheet.create({
  container: { marginHorizontal: 20 },
  inputContainer: {
    alignItems: "center",
    width: "100%",
  },
  header: { marginTop: 20 },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: "#b00505",
  },
  intro: {
    // fontWeight: "800",
    textAlign: "center",
    lineHeight: 19,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  highlight: {
    fontWeight: "bold",
  },
  highlightBack: {
    padding: 12,
    backgroundColor: "#58b870",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 120,
    margin: 20,
    borderRadius: 60,
    borderColor: "#66b594",
    borderWidth: 2,
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 140,
  },

  cardTitle: {
    marginVertical: 6,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
  },
  cardTextConatiner: {
    flex: 1,
    flexDirection: "row",
  },
  cardText: {
    marginVertical: 5,
    paddingHorizontal: 15,
    width: "50%",
    height: 180,
  },
  cardTextValue: {
    fontSize: 14,
    lineHeight: 25,
    height: "22%",
    width: "100%",
  },
  cardTextKey: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 25,
    height: "22%",
  },
  card: {
    flex: 1,
    borderColor: "#797878",
    // borderWidth: 1,
    elevation: 4,
    borderRadius: 5,
    backgroundColor: "#ccc4bf",
    width: "95%",
    marginVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
