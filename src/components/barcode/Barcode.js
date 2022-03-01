import React, { useState, useEffect } from "react";
import { Text, View, Button } from "native-base";
import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
// import { DefaultTheme } from "react-native-paper";
// import { screenWidth, screenHeight } from "../../layout/layout";

const Barcode = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);

  const cWid = props.cameraHeight;

  const styles = () =>
    StyleSheet.create({
      container: {
        height: props.cameraHeight,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
      },
    });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    props.setcameraHeight("10%");
    props.setScanned(true);
    //data is the number in the scan code
    props.setBarCodeNumber(data);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles().container}>
      <BarCodeScanner
        onBarCodeScanned={props.scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {props.scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default Barcode;
