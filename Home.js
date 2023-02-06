import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const irProfile = ()=>{ 
    navigation.navigate("Profile")
  }

  const irSettings = ()=>{
    navigation.navigate("Settings")
  }

  return (
    <View>
      <Button title='Profile' onPress={irProfile} />
      <Text>---</Text>
      <Button title='Settings' onPress={irSettings} />
      <Text>---</Text>
      <Text>---</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})