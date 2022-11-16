import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { Icon } from "@rneui/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;

const RecentReportsTab = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.newReport}>
        <TouchableOpacity onPress={() => navigation.navigate("ReportTasks")}>
          <Icon name="create-new-folder" type="material"></Icon>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Recent Reports!</Text>
      </View>
    </>
  );
};

const RecentReportsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recent Reports" component={RecentReportsTab} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  newReport: {
    alignSelf: "flex-end",
  },
});

export default RecentReportsScreen;
