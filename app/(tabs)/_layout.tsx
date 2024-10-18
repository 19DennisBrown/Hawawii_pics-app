

import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle:{
            backgroundColor:'pink',
            borderTopColor:'gray'
          }
        }}
      >
        <Tabs.Screen 
          name='home' 
          options={{ headerShown: false}} 
          />
        <Tabs.Screen
        name='explore'
        options={{headerShown: false}}/>
        <Tabs.Screen
          name='about'
          options={{headerShown: false}}
          />
      </Tabs>
    </>
  )
}

export default TabsLayout