import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";

import Home from "./Home";
import SearchBar from "../components/searchbar";

const Tab = createBottomTabNavigator();

const RecentReportsTab = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
  const renderItem = ({ item }) => <Item title={item.title} />;
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
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
        />
      </View>
    </View>
  );
};

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Report",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Report",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Report",
  },
  {
    id: "3434af33-34a3-4332-aaaa-56257142ed32",
    title: "Fourth Report",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#D3D3D3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 16,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});
const RecentReportsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recent Reports"
        component={RecentReportsTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              color={color}
              size={size}
            />
          ),

          title: "Recent Reports",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RecentReportsScreen;
