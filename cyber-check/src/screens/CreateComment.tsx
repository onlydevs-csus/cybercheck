import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 
//import Home from "./Home";
//import { Icon } from "@rneui/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
 
//const Tab = createBottomTabNavigator();
 
 
type RootStackParamList = {};
 
type Props = NativeStackScreenProps<RootStackParamList>;

//const [comment, setComment] = useState('empty');

const CCReportTab = ({ navigation }: Props) => {
  return (
    <>

      <View style={styles.header}>
      <Text style={styles.header}>REPORTNAME</Text>
      </View>
      <Text style={styles.sub}>Add Comment</Text>

     <TextInput
        multiline
        placeholder='e.g. kasljdfalksjdf;alksdfj'
       // onChangeText={(val)=> setComment(val)}
        style={{
            height: 100,
            margin: 20,
            padding: 10,
            borderColor: 'grey',
            borderWidth: 1,
        }}
        />

      <View style={{alignItems: "center", justifyContent: "center"}}>
      <Button onPress={() => {}} title='SUBMIT?' />

      </View>

    </>
  );
};

 
const styles = StyleSheet.create({
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  sub: {
    marginTop: 10
  },

});
 
export default CCReportTab;
 
 
