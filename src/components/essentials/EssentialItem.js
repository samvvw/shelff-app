import { View, StyleSheet, Text } from 'react-native'

const EssentialItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <View style={styles.content}>
        <Text style={styles.title}>{item?.itemName}</Text>
        <Text style={styles.subtitle}>
          <Text style={styles.highlight}>Added to my shelff</Text>:{' '}
          {item?.creationDate}
        </Text>
      </View>
    </View>
  )
}

const styles = new StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#e8e8e8',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 30,
    alignItems: 'center'
  },
  imageContainer: {
    width: 55,
    height: 55,
    backgroundColor: '#dfdfdf',
    borderRadius: 10,
    marginRight: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12
  },
  highlight: {
    fontWeight: 'bold'
  }
})

export default EssentialItem
