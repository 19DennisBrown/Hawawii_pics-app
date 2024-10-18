

import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height:'100%',
          backgroundColor: 'pink'
        }}
      >
        <View
        className="grid text-center h-full items-center justify-center"
        >
         <Text className="text-3xl" > {"About Page"} </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default About