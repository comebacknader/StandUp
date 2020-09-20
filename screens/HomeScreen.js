import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { Layout, Typography, Color } from '../styles';


const HomeScreen = ({ navigation }) => {

  const onPressImpressions = () => {
    navigation.navigate('Impressions')
  }

  const onPressBits = () => {
    navigation.navigate('Bits')
  }
  
  return (
      <View>
        <ScrollView>
          <TouchableHighlight activeOpacity={0.6}
            underlayColor={Color.LIGHTGRAY}
            onPress={onPressImpressions}>
            <View style={[Layout.flexAndDirectionRow, Layout.alignItemsCenter, Layout.paddingTen, Layout.bottomBorderGray]}>
              <Image source={require('../src/assets/images/theater.png')} style={[Layout.smallImage]} />
              <Text style={[Layout.marginLeft20, Typography.TitleFont]}>Impressions</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.6}
            underlayColor={Color.LIGHTGRAY}
            onPress={onPressBits}>
            <View style={[Layout.flexAndDirectionRow, Layout.alignItemsCenter, Layout.paddingTen, Layout.bottomBorderGray]}>
              <Image source={require('../src/assets/images/actor.png')} style={[Layout.smallImage]} />
              <Text style={[Layout.marginLeft20, Typography.TitleFont]}>Bits</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({});

export default HomeScreen;