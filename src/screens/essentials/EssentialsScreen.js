import { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import EssentialsList from '../../components/essentials/EssentialsList'
import { UserContext } from '../../context/UserContext'
import { useQuery } from '@apollo/client'
import { GET_ESSENTIALS } from '../../queries/queries'

const EssentialsScreen = () => {
  const [items, setItems] = useState([])
  const { user } = useContext(UserContext)
  const { data } = useQuery(GET_ESSENTIALS, {
    variables: { userId: user?.uid }
  })

  useEffect(() => {
    if (user?.uid) {
      setItems(data?.essentials)
    }
  }, [user, data])

  return (
    <>
      {!items?.length ? (
        <View style={styles.container}>
          <View style={styles.emptyImage}></View>
          <Text style={styles.emptyTitle}>Your essential list is empty</Text>
          <Text style={styles.emptySubtitle}>
            Start adding products to be able to create your list
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <EssentialsList data={data?.essentials} />
        </>
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
    paddingHorizontal: 50
  },
  emptyImage: {
    width: 96,
    height: 96,
    backgroundColor: '#C4C4C4',
    borderRadius: 20,
    marginBottom: 20
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  emptySubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
    textAlign: 'center'
  }
})

export default EssentialsScreen
