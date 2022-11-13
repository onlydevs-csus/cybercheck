import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IncidentOptions } from "../constants/IncidentOptions";
import { Dropdown } from "react-native-element-dropdown";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;

const SelectIncident = ({ navigation }: Props) => {
  const [selectedIncident, setSelectedIncident] = useState(0);

  const getSelectedIncident = (selectedIncident: number) => {
    return IncidentOptions[selectedIncident].label;
  };

  console.log(getSelectedIncident(selectedIncident));

  const hideStatusBar = () => {
    if (Platform.OS === "android") {
      return { marginTop: StatusBar.currentHeight };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Create New{"\n"}Report</Text>
      </View>
      <View style={styles.incidentContainer}>
        <Text style={styles.incidentText}>Incident Type</Text>
      </View>
      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          data={IncidentOptions}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={selectedIncident}
          onChange={(item) => {
            setSelectedIncident(item.value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 45,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  incidentContainer: {
    alignItems: "center",
    marginTop: windowHeight * 0.1,
  },
  incidentText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "rgba(217, 217, 217, 0.25)",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  dropdownContainer: {
    maxWidth: windowWidth * 0.9,
    minWidth: windowWidth * 0.7,
    alignSelf: "center",
    paddingTop: 15,
  },
  dropdownText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SelectIncident;
