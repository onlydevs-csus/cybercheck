import React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ManageAccount = ({ navigation }: Props) => {
  return ( 
      <View style={styles.container}>
    <Text>Edit your User Account </Text>
    <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("RecentReportsTab", { });
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
  </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Poppins",
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
});

export default ManageAccount;