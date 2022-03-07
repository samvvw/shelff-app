import React, { useEffect, useState } from "react";
import { Center } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { openDatabase, createTables } from "../services/sqllite";
const SplashScreen = ({ navigation }) => {
  const checkFirstLaunch = async () => {
    // AsyncStorage.clear(); //to check onboarding
    const firstTimeCheck = await AsyncStorage.getItem("isFirstTimeOpen");
    console.log("firstTimeCheck", firstTimeCheck);
    if (firstTimeCheck == null) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const db = openDatabase();
    createTables(db);
  }, []);

  useEffect(() => {
    (async () => {
      const isFirst = await checkFirstLaunch();

      if (isFirst) {
        setTimeout(() => {
          navigation.replace("Onboarding");
        }, 5000);
      } else {
        setTimeout(() => {
          navigation.replace("VerticalMenu");
        }, 5000);
      }
    })();
  }, []);

  return (
    <Center h="100%">
      <Center
        bg="primary.400"
        _text={{
          color: "white",
          fontSize: 40,
        }}
        h="30%"
        w="50%"
      >
        Shelff
      </Center>
    </Center>
  );
};

export default SplashScreen;
