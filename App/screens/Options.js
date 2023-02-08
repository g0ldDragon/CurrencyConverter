import React from "react-native";
import {
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeperator } from "../components/RowItem";

const openUrl = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", "Please try again!");
  });
};

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
    <ScrollView>
      <RowItem
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
        text="Themes"
        onPress={() => alert("todo!")}
      />
      <RowSeperator />
      <RowItem
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        text="React Native Basics"
        onPress={() =>
          openUrl(
            "https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter"
          )
        }
      />
      <RowSeperator />
      <RowItem
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        text="React Native by Example"
        onPress={() => openUrl("https://reactnativebyexample.com")}
      />
    </ScrollView>
  </SafeAreaView>
);
