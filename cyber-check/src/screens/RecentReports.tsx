import React from "react";
<<<<<<< HEAD
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { Icon } from "@rneui/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;

const RecentReportsTab = ({ navigation }: Props) => {
=======
import { StyleSheet, View, Text, Dimensions, Pressable, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RecentReportsTab = () => {
>>>>>>> c3487fd15757ccad82c16e1d93873e2f65ccf2c6
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

<<<<<<< HEAD
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
=======
const RecentReportsScreen = ({ navigation }: Props) => (
  <><SafeAreaView style={[
    styles.container]}>
      <View style={styles.navigationBar}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "flex-start"}}> 
          <TouchableOpacity onPress={() => navigation.navigate("ManageAccount")}>
            <Icon name="settings" type="material"></Icon>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
          <Text style={{fontSize: 30}}> Recent Reports </Text>
        </View> 
        <View style={{flex: 1, alignItems: "flex-end", justifyContent: "center"}}>
          <TouchableOpacity //onPress={() => navigation.navigate("RecentReportsTab")}
          >
            <Icon name="tab" type="material"> </Icon>
          </TouchableOpacity>
        </View>
      </View> 

    <View style={{ flex: 6 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Recent Reports"
          component={RecentReportsTab}
          options={{
            headerShown: false
          }} />
      </Tab.Navigator>
    </View>
    </SafeAreaView>
</>

);

const styles = StyleSheet.create({
  navigationBar:{
    backgroundColor: "grey",
    flex: .3,
    padding: 20,
    flexDirection: "row",
  },
  container: {
    flex: 1
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "20px 20px 205px red",
    elevation: 4,
    width: windowWidth * 0.8,
    height: 50,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginTop: windowHeight * 0.4,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Poppins",
  },
  Nav:{
    
  }

});

export default RecentReportsScreen;
>>>>>>> c3487fd15757ccad82c16e1d93873e2f65ccf2c6
