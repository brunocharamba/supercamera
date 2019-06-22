import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class First extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>First Page on TabNavigation</Text>
      </View>
    )
  }
}
