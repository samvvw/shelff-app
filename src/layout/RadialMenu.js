import { Box } from "native-base";
import React from "react";

import { Component, StyleSheet, View } from "react-native";
import ActionButton from "react-native-circular-action-menu";
import Icon from "react-native-vector-icons/Ionicons";

const ReadialMenu = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      {/*Rest of App come ABOVE the action button component!*/}
      <ActionButton buttonColor="rgba(0,0,0,1)" degrees="135" radius="80">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log("notes tapped!")}
        >
          <Icon name="android-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}
        >
          <Icon
            name="android-notifications-none"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Tasks"
          onPress={() => {}}
        >
          <Icon name="android-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default ReadialMenu;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  circleSize: {
    height: 40,
  },
});
