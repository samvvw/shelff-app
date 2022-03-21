import { View, Box } from 'native-base'
import React from 'react'
import Barcode from '../components/barcode/Barcode'
import NewItem from '../components/barcode/NewItem'
import ItemsList from '../components/barcode/ItemsList'
import NewItemBackground from '../components/barcode/NewItemBackground'
import { useState, useEffect, useContext } from 'react'

import { findBarcodeinLocalDB } from '../components/barcode/saveItems'
import { ItemsContext } from '../context/ItemsContext'

const AddItemBarcode = ({ navigation }) => {
    const { findItemInDB, itemFoundDB } = useContext(ItemsContext)
    const [arrowButton, setArrowButton] = useState('arrow-up')
    const [cameraHeight, setcameraHeight] = useState('50%')
    const [barCodeNumber, setBarCodeNumber] = useState()
    const [scanned, setScanned] = useState(false)
    const [items, setItems] = useState()

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

    useEffect(() => {
        //look for barcode in local database
        // findBarcodeinLocalDB(barCodeNumber, setItems)
        findItemInDB(barCodeNumber)
    }, [barCodeNumber])

    useEffect(() => {
        if (itemFoundDB) {
            setItems(itemFoundDB)
        }
    }, [itemFoundDB])

    return (
        <>
            {scanned ? (
                <NewItemBackground />
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
                        productName={items && items.itemName}
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

// const Background = () => {
//     return (
//         <Box
//             style={{
//                 backgroundColor: 'rgba(208, 200, 210, 1)',
//                 width: '100%',
//                 height: '3%',
//             }}
//         ></Box>
//     )
// }
