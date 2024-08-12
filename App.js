import { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable, Modal } from "react-native";
const logo = require("./assets/adaptive-icon.png")

export default function App()
{
  const [isModel, setIsModel] = useState(false)
return (
 <ScrollView style={{ padding: 60, backgroundColor: 'orange' }}>
<Button title="Press" onPress={() => setIsModel(true)} />
<Modal visible={isModel} animationType="slide" presentationStyle="pageSheet">
<View style={{flex: 1, backgroundColor: 'blue', padding: 60}}>
<Text>Salom</Text>
<Button title="Close" color='yellow' onPress={() => setIsModel(false)} />
</View>
</Modal>
 
 </ScrollView>
)
}