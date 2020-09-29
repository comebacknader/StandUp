import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import { Layout, Typography, Color } from "../../styles";
import { StackParamList } from "../components/Annotations";
import { StackScreenProps } from "@react-navigation/stack";
import Logo from "../assets/images/logo-mic.svg";

type Props = StackScreenProps<StackParamList, 'Record'>;

const Record = ({ navigation }: Props) => {

  
  return (
    <View style={[styles.bgPrimary, Layout.isFlex, Layout.justifyContentCenter]}>
      <Logo style={{alignSelf: "center"}} />
    </View>
  )
}

const styles = StyleSheet.create({
  bgPrimary: {
    backgroundColor: Color.PRIMARY_BLUE,
  }
});

export default Record;