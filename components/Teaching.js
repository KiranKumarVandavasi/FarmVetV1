import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Press from "../ui/Press";
import OpactiyAnimation from "../ui/OpacityAnimation";
import { useContext } from "react";
import { Context } from "../store/Context";
import i18n from "../localization/i18n";

/**  "teaching": {
    "drYravindraReddy": "Dr. Y. Ravindra Reddy",
    "everyDayYoullGetTheChance": "Every day you’ll get the chance to inspire young people",
    "andUseYourSkills": "and use your skills to give something back – making sure every pupil gets the same access to a quality education and the opportunity to succeed.",
    "detailsOf": "Details of ",
    "employment": "Employment ",
    "record": "record",
    "designation": "Designation",
    "dateOfJoining": "Date of Joining",
    "dateOfLeaving": "Date of Leaving",
    "employment2": "Employment",
    "professor": "Professor",
    "associateProfessor": "Associate Professor",
    "assistantProfessor": "Assistant Professor",
    "scientist": "Scientist",
    "tillDate": "Till Date",
    "years": "Years",
    "months": "Months"
  }, */

function Teaching() {
  const context = useContext(Context);
  //   const { name, phoneNumber } = context;
  return (
    <>
      <View style={styles.header}>
        <Text>{context.phoneNumber}</Text>
        <Text style={styles.title}>{i18n.t("teaching.drYravindraReddy")}</Text>
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
        {/* <TextInput
          placeholder="Name"
          // onChangeText={updateName}
          value={context.city}
          onChangeText={(city) => {F
            context.setCity(city);
          }}
          color="black"
          backgroundColor="white"
          style={styles.textInput}
        /> */}
        <Text style={styles.intro}>
          {" "}
          <Text style={styles.highlight}>
            {i18n.t("teaching.everyDayYoullGetTheChance")}{" "}
          </Text>
          {i18n.t("teaching.andUseYourSkills")}
        </Text>
        <View style={styles.highlightBack}>
          <Text style={[styles.highlight, { fontSize: 16 }]}>
            {i18n.t("teaching.detailsOf")}
            <Text style={{ color: "#b00505", fontSize: 16 }}>
              {" "}
              {i18n.t("teaching.employment")}{" "}
            </Text>
            {i18n.t("teaching.record")}
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.designation")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfLeaving")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.employment2")}
                    </Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("teaching.professor")}
                    </Text>

                    <Text style={styles.cardTextValue}>24-10-2012</Text>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("teaching.tillDate")}
                    </Text>

                    <Text style={[styles.cardTextValue]}>
                      {i18n.t("teaching.tillDate")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText, { width: "50%" }]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.designation")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfLeaving")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.employment2")}
                    </Text>
                  </View>
                  <View style={[styles.cardText, { width: "49%" }]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("teaching.associateProfessor")}
                    </Text>

                    <Text style={styles.cardTextValue}>12-02-2009</Text>
                    <Text style={styles.cardTextValue}>23-10-2012</Text>

                    <Text style={[styles.cardTextValue]}>
                      2.8 {i18n.t("teaching.years")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.designation")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfLeaving")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.employment2")}
                    </Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("teaching.assistantProfessor")}
                    </Text>

                    <Text style={styles.cardTextValue}>31-12-2008</Text>
                    <Text style={styles.cardTextValue}>11-02-2009</Text>

                    <Text style={[styles.cardTextValue]}>
                      0.2 {i18n.t("teaching.months")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.designation")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfLeaving")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.employment2")}
                    </Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("teaching.scientist")}
                    </Text>

                    <Text style={styles.cardTextValue}>17-10-2006</Text>
                    <Text style={styles.cardTextValue}>30-12-2008</Text>

                    <Text style={[styles.cardTextValue]}>
                      2.2 {i18n.t("teaching.years")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.designation")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfLeaving")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.employment2")}
                    </Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("teaching.associateProfessor")}
                    </Text>

                    <Text style={styles.cardTextValue}>21-03-2005</Text>
                    <Text style={styles.cardTextValue}>10-10-2006</Text>

                    <Text style={[styles.cardTextValue]}>
                      1.7 {i18n.t("teaching.years")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </OpactiyAnimation>
          <OpactiyAnimation>
            <View style={styles.inputContainer}>
              <View style={styles.card}>
                <View style={styles.cardTextConatiner}>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.designation")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfJoining")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.dateOfLeaving")}
                    </Text>
                    <Text style={styles.cardTextKey}>
                      {i18n.t("teaching.employment2")}
                    </Text>
                  </View>
                  <View style={[styles.cardText]}>
                    <Text style={styles.cardTextValue}>
                      {i18n.t("teaching.scientist")}
                    </Text>

                    <Text style={styles.cardTextValue}>17-11-1997</Text>
                    <Text style={styles.cardTextValue}>17-3-2005</Text>

                    <Text style={[styles.cardTextValue]}>
                      7.5 {i18n.t("teaching.years")}
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

export default Teaching;

const styles = StyleSheet.create({
  container: { marginHorizontal: 18 },
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
    paddingTop: 15,
    width: "50%",
    height: 160,
  },
  cardTextValue: {
    fontSize: 14,
    height: "25%",
    width: "100%",
  },
  cardTextKey: {
    fontSize: 14,
    fontWeight: "600",
    paddingLeft: 15,
    height: "25%",
  },
  card: {
    flex: 1,
    borderColor: "#797878",
    elevation: 4,
    borderRadius: 5,
    backgroundColor: "#83bba4c2",
    width: "95%",
    marginVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
