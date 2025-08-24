import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Entypo,
  FontAwesome5,
  Foundation,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Alert, View } from "react-native";

import AboutUs from "../AboutUs";
import Animals from "../Animals";
import RecentWorks from "./RecentWorks";
import Publication from "../Publication";
import ResearchAreas from "../ResearchAreas";
import Teaching from "../Teaching.js";
import Extention from "./Extention";
import Byproducts from "./Byproducts";
import Technologies from "../Technologies.js";
import IndianHeritage from "./IndianHeritage";
import FarmerHelpDesk from "../FarmerHelpDesk";
import Contact from "../Contact";
import FeedBack from "../FeedBack";
import Profile from "../Profile";
import Home from "./Welcome";

import IconButton from "../uiCred/IconButton";
import { ContextProvider } from "../../store/Context";
import { AuthContext } from "../../store/auth-context";
import { useLanguage } from "../../store/LanguageProvider";
import i18n from "../../localization/i18n";

const Drawer = createDrawerNavigator();
const ScreensArray = [
  {
    route: "Home",
    label: "Home",
    icon: "home",
    component: Home,
  },
  {
    route: "AboutUs",
    label: "AboutUs",
    icon: "user",
    component: AboutUs,
  },
];

function MyDrawer() {
  const { t } = useTranslation();
  const authCtx = useContext(AuthContext);
  const { toggleLanguage, language } = useLanguage();

  function handleLogOut() {
    Alert.alert(
      language === "te" ? "లాగ్ అవుట్" : "Logout",
      language === "te"
        ? "మీరు లాగ్ అవుట్ చేయాలనుకుంటున్నారా?"
        : "Are you sure want to log out?",
      [
        {
          text: language === "te" ? "లేదు" : "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: language === "te" ? "అవును" : "Yes",
          onPress: () => authCtx.logout(),
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <ContextProvider>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#387849" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#ccc4bf" },
          drawerContentStyle: { backgroundColor: "#185828e7" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#a9e4a1",
        }}
        // drawerContent={() => <Home />}
      >
        {/* {ScreensArray.map((item, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              item,
              drawerIcon: ({ color, size, focused }) => (
                <Icon name={item.icon} size={size} color={color} />
              ),
            }}
          />
        );
      })} */}
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: language === "te" ? "స్వాగతం" : "Welcome",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={18}></Ionicons>
            ),
            headerRight: ({ tintColor }) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconButton
                  icon="language"
                  color={tintColor}
                  size={24}
                  onPress={toggleLanguage}
                />

                <IconButton
                  icon="exit"
                  color={tintColor}
                  size={24}
                  onPress={handleLogOut}
                />
              </View>
            ),
          }}
        />
        {/* <Drawer.Screen
        name="Article"
        component={Article}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="article" size={20} color={color} />
          ),
        }}
      /> */}
        <Drawer.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: language === "te" ? "మా గురించి" : "About Us",
            headerStyle: { backgroundColor: "#155c28" },
            sceneContainerStyle: { backgroundColor: "#ebdede" },
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={18}></Ionicons>
            ),
          }}
        />
        <Drawer.Screen
          name="Animals"
          component={Animals}
          options={{
            title: language === "te" ? "పశువులు" : "Animals",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cow" size={21} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Recent Works"
          component={RecentWorks}
          options={{
            title: language === "te" ? "ఇటీవలి రచనలు" : "Recent Works",
            drawerIcon: ({ color, size }) => (
              <Entypo name="back-in-time" size={20} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Research Areas"
          component={ResearchAreas}
          options={{
            title: language === "te" ? "పరిశోధనా ప్రాంతాలు" : "Research Areas",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-search"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="By products of Cow"
          component={Byproducts}
          options={{
            title:
              language === "te" ? "ఆవుల ఉప ఉత్పత్తులు" : "By products of Cow",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cow" size={21} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Technologies"
          component={Technologies}
          options={{
            title: language === "te" ? "సాంకేతికతలు" : "Technologies",
            drawerIcon: ({ color, size }) => (
              <Octicons name="workflow" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Teaching"
          component={Teaching}
          options={{
            title: language === "te" ? "బోధన" : "Teaching",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="chalkboard-teacher" size={18} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Extention"
          component={Extention}
          options={{
            title: language === "te" ? "ఎక్సటెన్షన్" : "Extention",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sale" size={22} color={color} />
            ),
            headerStyle: { backgroundColor: "#f7f4f4" },
            headerTintColor: "black",
          }}
        />

        {/* <Drawer.Screen
        name="PDFExample"
        component={PDFExample}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="chalkboard-teacher" size={18} color={color} />
          ),
        }}
      /> */}
        {/*
   
     
     
     

*/}
        <Drawer.Screen
          name=" Indian Heritage"
          component={IndianHeritage}
          options={{
            title: language === "te" ? "భారతీయ వారసత్వం" : "Indian Heritage",
            headerStyle: { backgroundColor: "#5ba555ff" },
            headerTintColor: "#f3f2f2",
            drawerIcon: ({ color, size }) => (
              <Foundation name="sheriff-badge" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Farmer HelpDesk"
          component={FarmerHelpDesk}
          options={{
            title:
              language === "te" ? "రైతుల హెల్ప్‌డెస్క్" : "Farmer HelpDesk",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="hands-helping" size={18} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Publication"
          component={Publication}
          options={{
            title: language === "te" ? "ప్రచురణలు" : "Publication",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="book-sharp" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name=" FeedBack"
          component={FeedBack}
          options={{
            title: language === "te" ? "ప్రతిస్పందన" : "FeedBack",
            drawerIcon: ({ color, size }) => (
              <Entypo name="new-message" size={22} color={color} />
            ),
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "black",
            sceneContainerStyle: { backgroundColor: "#f1f4f2" },
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="phone" size={22} color={color} />
            ),
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "black",
            title: language === "te" ? "సంప్రదించండి" : "Contact Us",
            drawerActiveTintColor: "#351401",
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-sharp"
                color={color}
                size={24}
              ></Ionicons>
            ),
            headerStyle: { backgroundColor: "#rgba(114, 146, 209, 0.6)" },
            headerTintColor: "#351401",
            title: language === "te" ? "ప్రొఫైల్" : "Profile",
            drawerActiveTintColor: "#351401",
          }}
        />
      </Drawer.Navigator>
    </ContextProvider>
  );
}

export default MyDrawer;
