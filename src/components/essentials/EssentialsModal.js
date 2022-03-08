import { useState } from 'react'
import { Modal, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const EssentialsModal = ({ visible, setVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false)
            }}
        >
            <View
                style={{
                    height: '90%',
                    marginTop: 'auto',
                }}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.headerText}>This is Half Modal</Text>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#98B3B7',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        padding: 26,
    },
    noteHeader: {
        backgroundColor: '#42f5aa',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    modalContainer: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
    },
    textInput: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 20,
        backgroundColor: '#ddd',
        borderTopWidth: 2,
        borderTopColor: '#ddd',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#98B3B7',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default EssentialsModal
