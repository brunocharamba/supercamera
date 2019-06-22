import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class Second extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Second Page on TabNavigation</Text>
      </View>
    )
  }
}
