import { View, Box } from 'native-base'
import React from 'react'
import Barcode from '../components/barcode/Barcode'
import NewItem from '../components/barcode/NewItem'
import { addItemBarcodeStyle } from '../styles/addItemBarcode'

import ItemsList from '../components/barcode/ItemsList'
// import { screenWidth, screenHeight } from "../styles/styleSizes";
import { useState } from 'react'

const AddItemBarcode = ({ navigation }) => {
    const [arrowButton, setArrowButton] = useState('arrow-up')
    const [cameraHeight, setcameraHeight] = useState('50%')
    const [barCodeNumber, setBarCodeNumber] = useState()
    const [scanned, setScanned] = useState(false)
    const [itemListChange, setItemListChange] = useState(true)
    //Array to save items temporarily
    const [arrItems, setArrItems] = useState([])

    const handleArrowButton = () => {
        if (arrowButton == 'arrow-up') {
            setArrowButton('arrow-down')
            setcameraHeight('10%')
        } else {
            setArrowButton('arrow-up')
            setcameraHeight('50%')
        }
    }
    return (
        <>
            {scanned ? (
                <Background />
            ) : (
                <Barcode
                    cameraHeight={cameraHeight}
                    setBarCodeNumber={setBarCodeNumber}
                    setScanned={setScanned}
                    scanned={scanned}
                    setcameraHeight={setcameraHeight}
                />
            )}

            <View>
                {scanned && (
                    <NewItem
                        barCodeNumber={barCodeNumber}
                        setScanned={setScanned}
                        setcameraHeight={setcameraHeight}
                        productName="Soy Milk"
                        setArrItems={setArrItems}
                        arrItems={arrItems}
                        navigation={navigation}
                    />
                )}
                {!scanned && (
                    <ItemsList
                        navigation={navigation}
                        handleArrowButton={handleArrowButton}
                        arrowButton={arrowButton}
                        itemListChange={itemListChange}
                        arrItems={arrItems}
                        setArrItems={setArrItems}
                    />
                )}
            </View>
        </>
    )
}

export default AddItemBarcode

const Background = () => {
    return (
        <Box
            style={{ backgroundColor: 'black', width: '100%', height: '10%' }}
        ></Box>
    )
}
