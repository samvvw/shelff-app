import { View, Box } from 'native-base'
import React from 'react'
import Barcode from '../components/barcode/Barcode'
import NewItem from '../components/barcode/NewItem'
import ItemsList from '../components/barcode/ItemsList'
import { useState, useeffect } from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import { findBarcodeinLocalDB } from '../components/barcode/saveItems'

const AddItemBarcode = ({ navigation }) => {
    const [arrowButton, setArrowButton] = useState('arrow-up')
    const [cameraHeight, setcameraHeight] = useState('50%')
    const [barCodeNumber, setBarCodeNumber] = useState()
    const [scanned, setScanned] = useState(false)
    const [itemNameFromDB, setItemNameFromDB] = useState('')

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

    //useEffect(() => {
    //look for barcode in database
    //setItemNameFromDB(findBarcodeinLocalDB(barCodeNumber))
    //}, [])

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

            <View style={{ flex: 1 }}>
                {scanned && (
                    <NewItem
                        barCodeNumber={barCodeNumber}
                        setScanned={setScanned}
                        setcameraHeight={setcameraHeight}
                        productName={itemNameFromDB}
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
