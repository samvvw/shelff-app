import { View } from "native-base";
import React from "react";
import Barcode from "../components/barcode/Barcode";
import NewItem from "../components/barcode/NewItem";
import { addItemBarcodeStyle } from "../styles/addItemBarcode";

import ItemsList from "../components/barcode/ItemsList";
// import { screenWidth, screenHeight } from "../styles/styleSizes";
import { useState } from "react";

const AddItemBarcode = () => {
  const [arrowButton, setArrowButton] = useState("arrow-up");
  const [cameraHeight, setcameraHeight] = useState("50%");
  const [barCodeNumber, setBarCodeNumber] = useState();
  const [scanned, setScanned] = useState(false);

  const handleArrowButton = () => {
    if (arrowButton == "arrow-up") {
      setArrowButton("arrow-down");
      setcameraHeight("10%");
    } else {
      setArrowButton("arrow-up");
      setcameraHeight("50%");
    }
  };
  return (
    <>
      {/* {!scanned && ( */}
      <Barcode
        cameraHeight={cameraHeight}
        setBarCodeNumber={setBarCodeNumber}
        setScanned={setScanned}
        scanned={scanned}
        setcameraHeight={setcameraHeight}
      />
      {/* )} */}
      <View>
        {scanned && (
          <NewItem
            barCodeNumber={barCodeNumber}
            setScanned={setScanned}
            setcameraHeight={setcameraHeight}
            productName="Dairyland Milk"
          />
        )}
        {!scanned && (
          <ItemsList
            handleArrowButton={handleArrowButton}
            arrowButton={arrowButton}
          />
        )}
      </View>
    </>
  );
};

export default AddItemBarcode;
