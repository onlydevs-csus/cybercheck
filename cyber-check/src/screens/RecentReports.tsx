import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
const Tab = createBottomTabNavigator();

const RecentReportsTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recent Reports!</Text>
    </View>
  );
};

const RecentReportsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
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
