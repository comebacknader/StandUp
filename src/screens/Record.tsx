import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Layout, Typography, Color } from "../../styles";
import { StackParamList } from "../components/Annotations";
import { StackScreenProps } from "@react-navigation/stack";
import Logo from "../assets/images/logo-mic.svg";

type Props = StackScreenProps<StackParamList, 'Record'>;

const Record = ({ navigation }: Props) => {

  return (
    <View style={[styles.recordContainer]}>
      <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
        <Logo style={{flex: 1, width: 100, height: 100}} />
        <Text style={[styles.logo]}>STAND UP</Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={[styles.recordButton]}
          onPress={() => {}}
          activeOpacity={0.6}
          title="Log In"
          accessibilityLabel="Go to login screen"
        >
          <View style={[styles.recordButtonInner]}>

          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  recordContainer: {
    ...Layout.isFlex,
    ...Layout.justifyContentCenter,
    ...Layout.alignItemsCenter,
    backgroundColor: Color.PRIMARY_BLUE,
  } as any,
  logo: {
    ...Typography.TitleFont, 
    fontSize: 40,
    color: "white",
  },
  recordButton: {
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: Color.SECONDARY_BLUE,
    borderColor: Color.DARKER_BLUE,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recordButtonInner: {
    width: 75,
    height: 75,
    backgroundColor: Color.SECONDARY_BLUE,
    borderColor: Color.DARKER_BLUE,
    borderRadius: 50,
    borderWidth: 1,    
  }
});

export default Record;