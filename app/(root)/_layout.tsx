import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
        <Stack.Screen name='user-profile' options={{headerShown: false}} />
    </Stack>
  )
}