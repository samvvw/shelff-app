import { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { UserContext } from '../../context/UserContext'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_ESSENTIALS, REMOVE_ESSENTIAL_ITEM } from '../../queries/queries'
import { openDatabase, executeTransaction } from '../../services/sqllite'
import { Spinner } from 'native-base'
import EssentialSwipeableList from '../../components/essentials/EssentialSwipeableList'
import { removeEssentialInLocalDB } from '../../components/barcode/saveItems'

const EssentialsScreen = () => {
    const [items, setItems] = useState()
    const { user } = useContext(UserContext)
    const [getEssentials, { data, loading }] = useLazyQuery(GET_ESSENTIALS)
    const [removeEssential, { data: removeEssentialData }] = useMutation(
        REMOVE_ESSENTIAL_ITEM,
    )

    useEffect(() => {
        if (user?.uid) {
            getEssentials({ variables: { userId: user?.uid } })
        } else {
            const db = openDatabase()
            const sql =
                'select * from items where isEssential = "true" group by barcode'
            executeTransaction(sql, db, setItems)
        }
    }, [user])

    useEffect(() => {
        if (data) setItems(data?.essentials)
    }, [data])

    useEffect(() => {
        if (removeEssentialData?.removeEssentialItem)
            setItems(removeEssentialData?.removeEssentialItem)
    }, [removeEssentialData])

    const removeFromLocalStorage = (item) => {
        removeEssentialInLocalDB(item, setItems)
    }

    const removeFromServer = (item) => {
        removeEssential({
            variables: { itemId: item.itemId, userId: user?.uid },
        })
    }

    return (
        <>
            {loading && <Spinner size="lg" mt={100}/>}
            {items?.length === 0 && (
                <View style={styles.container}>
                    <Image 
                        source={require('../../../assets/icon.png')} 
                        alt={'icon'}
                        style={styles.emptyImage}    
                    />
                    <Text style={styles.emptyTitle}>
                        Your essential list is empty
                    </Text>
                    <Text style={styles.emptySubtitle}>
                        Start adding products to be able to create your list
                    </Text>
                </View>
            )}
            {items?.length >= 1 && (
                <EssentialSwipeableList
                    data={items}
                    onLocalRemove={removeFromLocalStorage}
                    onServerRemove={removeFromServer}
                />
            )}
        </>
    )
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 50,
        backgroundColor: 'white',
        borderTopWidth: 0.5,
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyImage: {
        width: 96,
        height: 96,
        borderRadius: 20,
        marginBottom: 20,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30,
        textAlign: 'center',
    },
})

export default EssentialsScreen
