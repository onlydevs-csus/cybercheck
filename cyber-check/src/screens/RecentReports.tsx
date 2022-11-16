import React from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import HamburgerMenu from '../components/HamburgerMenu';

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const RecentReportsTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recent Reports!</Text>
    </View>
  );
};

const RecentReportsScreen = () => {
  return (
    <><View style = {{flexDirection: "row"}}> 
      <HamburgerMenu />
      </View>
      
    <View style = {{flex: 6}}>
        <Tab.Navigator>
          <Tab.Screen  
          name="Recent Reports" 
          component={RecentReportsTab}  />
        </Tab.Navigator>
      </View></>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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