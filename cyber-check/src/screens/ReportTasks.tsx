import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { TaskList } from "../constants/taskList";
import Checkbox from "../components/Checkbox";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type RootStackParamList = {};

type Props = NativeStackScreenProps<RootStackParamList>;

const ReportTasks = ({ navigation }: Props) => {
  const [tasksStatus, setTasksStatus] = useState<
    { TaskId: number; TaskStatus: string }[]
  >([]);

  const getCheckboxStatus = (checked: boolean): boolean => {
    return checked;
  };

  return (
    <>
      <SafeAreaView
        style={[
          styles.container,
          {
            marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
          },
        ]}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Report Name</Text>
        </View>
        <View style={styles.tasksContainer}>
          {TaskList.map((task) => {
            return (
              <View key={task.TaskId} style={styles.taskContainer}>
                <Checkbox getCheckboxStatus={getCheckboxStatus} />
                <TouchableOpacity style={styles.taskTextContainer}>
                  <Text style={styles.taskText}>{task.TaskName}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.taskCountContainer}>
        <View style={styles.taskCount}>
          <Text style={styles.taskCountText}>Remaining Tasks: </Text>
        </View>
        <View style={styles.taskCount}>
          <Text style={styles.taskCountText}>Completed Tasks: </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
  },
  header: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 45,
  },
  tasksContainer: {
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  taskTextContainer: {
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.25)",
  },
  dropdown: {
    marginTop: 15,
    height: 50,
    backgroundColor: "rgba(217, 217, 217, 0.25)",
    padding: 10,
    borderRadius: 10,
  },
  taskText: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 15,
  },
  taskCountContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "baseline",
    // flexWrap: "wrap-reverse",
    borderTopWidth: 3,
    maxHeight: "100%",
    Width: "100%",
  },
  taskCount: {
    // flex: 2,
    maxHeight: "100%",
    Width: "100%",
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
  },
  taskCountText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ReportTasks;
