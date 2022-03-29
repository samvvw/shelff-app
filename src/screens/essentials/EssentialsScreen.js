import { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { UserContext } from '../../context/UserContext'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_ESSENTIALS, REMOVE_ESSENTIAL_ITEM } from '../../queries/queries'
import { openDatabase, executeTransaction } from '../../services/sqllite'
import { Spinner } from 'native-base'
import EssentialSwipeableList from '../../components/essentials/EssentialSwipeableList'
import { removeEssentialInLocalDB } from '../../components/barcode/saveItems'
import { screenWidth, screenHeight } from '../../layout/layout'

const EssentialsScreen = () => {
    const [items, setItems] = useState()
    const { user, idToken } = useContext(UserContext)
    const [getEssentials, { data, loading }] = useLazyQuery(GET_ESSENTIALS)
    const [removeEssential, { data: removeEssentialData }] = useMutation(
        REMOVE_ESSENTIAL_ITEM,
    )

    useEffect(() => {
        if (user?.uid) {
            getEssentials({
                variables: { userId: user?.uid },
                context: { headers: { Authorization: `Bearer ${idToken}` } },
            })
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
            context: {
                headers: { Authorization: `Bearer ${idToken}` },
            },
        })
    }

    return (
        <>
            {loading && <Spinner size="lg" style={styles.spinner} />}
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
        height: screenHeight / 2,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        position: 'relative',
        top: 100,
    },
    emptyImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: 'lightgray',
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: 16,
        textAlign: 'center',
        width: '60%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30,
        textAlign: 'center',
    },
})

export default EssentialsScreen
