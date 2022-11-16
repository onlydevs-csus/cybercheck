import React from "react";
import { StyleSheet, View, Text, Dimensions, Pressable, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import Home from "./Home";
import SearchBar from "../components/searchbar";
const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RecentReportsTab = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
  //const renderItem = ({ item }: { item: any }) => <Item title={item.title} />;
  const Item = ({
    item,
    onPress,
    backgroundColor,
    textColor,
  }: {
    item: any;
    onPress: any;
    backgroundColor: any;
    textColor: any;
  }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }: { item: any }) => {
    const backgroundColor = item.id === selectedId ? "#DDDDDD" : "#D3D3D3";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <SearchBar
        clicked={searchPhrase}
        searchPhrase={setSearchPhrase}
        setSearchPhrase={clicked}
        setClicked={setClicked}
      ></SearchBar>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={DATA}
          columnWrapperStyle={styles.row}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
};

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