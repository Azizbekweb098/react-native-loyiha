import { useState } from "react";

import {ScrollView, Text, Image, Button, Modal, View} from 'react-native';
const logo_1 = require('./assets/1.jpg');
const logo_2 = require('./assets/2.png')
const logo_3 = require('./assets/3.png')
const logo_4 = require('./assets/4.png')

export default function App(){
  return (
    <ScrollView style={{ backgroundColor: 'black', }}>
     <View>
     <Text style={{marginLeft: 5, padding: 20, marginTop: 30, color: '#fff', fontSize: 25}}>
      php_coder_
     </Text>
     </View>
     <View>
      <Image source={logo_2} style={{ width: 33, height: 33, marginLeft: 200, marginTop: -42 }} />
      <Image source={logo_3} style={{ width: 30, height: 30, marginLeft: 250, marginTop: -33 }} />
      <Image source={logo_4} style={{ width: 30, height: 30, marginLeft: 300, marginTop: -32 }} />
 
     </View>
    </ScrollView>
  )
}