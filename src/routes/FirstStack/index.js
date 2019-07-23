import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import stackHeaderStyles from '../styles'

// import First from '../../pages/First'
import PhotoCamera from '../../pages/Camera/PhotoCamera'

const FirstStack = createStackNavigator({
  Photo: {
    screen: PhotoCamera,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <View />,
      headerRight: <View />,
      headerForceInset: { top: 'never', bottom: 'never' },
      ...stackHeaderStyles
    })
  }
})

export default FirstStack
