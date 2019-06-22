import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import stackHeaderStyles from '../styles'

import Second from '../../pages/Second'

const SecondStack = createStackNavigator({
  Second: {
    screen: Second,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <View />,
      headerRight: <View />,
      headerForceInset: { top: 'never', bottom: 'never' },
      ...stackHeaderStyles
    })
  }
})

export default SecondStack
