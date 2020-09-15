import React from 'react'

import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
  React.useEffect(() => {
  }, [])
  
  return (
      <View style={styles.homeContainer}>
        <ScrollView>
          <View style={styles.menuListItem}>
            <Image source={require('../src/assets/images/theater.png')} style={styles.menuImage} />
            <Text style={styles.menuText}>Impressions</Text>
          </View>
          <View style={styles.menuListItem}>
            <Image source={require('../src/assets/images/actor.png')} style={styles.menuImage} />
            <Text style={styles.menuText}>Bits</Text>
          </View>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
  },
  customFont: {
    fontFamily: 'RibeyeMarrow-Regular',
  },
  menuListItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1  },
  menuText: {
    marginLeft: 20,
    fontFamily: 'RibeyeMarrow-Regular',
  },
  menuImage: {
    width: 60,
    height: 60,
  }
});

export default HomeScreen;